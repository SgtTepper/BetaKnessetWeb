import React, { useState, useEffect, useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";

import PersonQuotes from "./PersonQuotes";
import WordCloud from "../../../components/WordCloud";
import PersonBills from "./PersonBills";
import PersonBillsStats from "./PersonBillsStats";
import config from "../../../config.json";
import {
    useBigScreen,
    useCancellableFetch,
    useNavigate,
    imageOrDefault,
    usePersonID,
    getFullName,
} from "../../../utils";
import { ScrollPage } from "../../../components/ScrollableView";
import PersonSearch from "../../../components/PersonSearch";
import "./index.css";
import { makeStyles } from "@material-ui/core";
import { FallbackPerson, Filter, Person, Position } from "../../../@types";
type MinimalPerson = Pick<
    Person,
    | "imgPath"
    | "LastName"
    | "FirstName"
    | "PersonID"
    | "KnessetNum"
    | "FactionName"
>;
type PersonsDict = Record<PropertyKey, Person>;

const useStyles = makeStyles({
    selection: {
        padding: "1em",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
    },

    people: {
        display: "flex",
        flexWrap: "wrap",
        justifyItems: "center",
        alignItems: "space-between",
        placeContent: "space-around",
        width: "100%",
        flexGrow: 1,
    },
});

const PersonProfile = React.memo(function () {
    const personID = usePersonID();
    const isBigScreen = useBigScreen();
    const [persons, setPersons] = useState<PersonsDict>({});
    const [fallbackPerson, setFallbackPerson] =
        useState<ReturnType<typeof parseResponse>>(null);
    const serverFetch = useCancellableFetch();
    const person = useMemo(
        () => (personID !== undefined ? persons[personID] : null),
        [persons, personID]
    );

    useEffect(() => {
        (async () => {
            const res = await serverFetch(`${config.server}/PersonGetAll`);
            const mapping: PersonsDict = {};
            for (const p of res) {
                mapping[parseInt(p.PersonID)] = p;
            }
            setPersons(mapping);
        })();
    }, [serverFetch]);

    useEffect(() => {
        if (person || !personID) return;

        (async () => {
            setFallbackPerson(null);
            const res = await serverFetch(
                `${config.server}/PersonEnrichment?personID=${personID}`
            );
            setFallbackPerson(parseResponse(res));
        })();
    }, [personID, person, serverFetch]);

    const chosenPerson = person || fallbackPerson;

    return (
        <ScrollPage
            parentStyle={{ backgroundColor: "#091022" }}
            limit={isBigScreen}
            id="person"
        >
            {personID && <PersonView persons={persons} person={chosenPerson} />}
            {!personID && <PersonSelectionView persons={persons} />}
        </ScrollPage>
    );
});
export default PersonProfile;

const PersonView = React.memo(function ({
    persons,
    person,
}: {
    persons: PersonsDict;
    person: MinimalPerson | null;
}) {
    const [billsFilter, setBillsFilter] = useState<Filter["Desc"] | null>(null);

    return (
        <div
            className="person-grid-container"
            style={{ width: "100%", position: "relative", zIndex: 2 }}
        >
            <div className="info">
                <div style={{ padding: "0 1em 2em 1em", width: "100%" }}>
                    <PersonSearch
                        style={{
                            color: "white",
                            borderBottom: "2px solid white",
                        }}
                        variant="standard"
                        persons={persons}
                    />
                </div>
                {person ? (
                    <PersonAvatar person={person} />
                ) : (
                    <CircularProgress />
                )}
            </div>
            <div className="mini-content">
                <WordCloud />
            </div>
            <div className="mid-content">
                <div className="content-wrapper">
                    <div className="content-rtl">
                        <PersonQuotes personID={person?.PersonID} />
                    </div>
                </div>
            </div>
            <div className="side-content-top">
                <PersonBillsStats
                    personID={person?.PersonID}
                    filter={billsFilter}
                    setFilter={setBillsFilter}
                />
            </div>
            <div className="side-content">
                <div className="content-wrapper">
                    <div className="content-rtl">
                        <PersonBills
                            personID={person?.PersonID}
                            filter={billsFilter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

const PersonSelectionView = React.memo(function ({
    persons,
}: {
    persons: PersonsDict;
}) {
    const classes = useStyles();
    const navigate = useNavigate();

    const rands = new Set<number>();
    const ids = Object.keys(persons);
    while (rands.size < 5 && rands.size < ids.length) {
        const index = Math.floor(Math.random() * ids.length);
        rands.add(parseInt(ids[index]));
    }

    return (
        <div className={classes.selection}>
            <PersonSearch
                style={{ color: "white", borderBottom: "2px solid white" }}
                variant="standard"
                persons={persons}
            />
            <div className={classes.people}>
                {[...rands].map((id) => (
                    <Button
                        key={id}
                        onClick={() => navigate({ personID: id, q: null })}
                        style={{ maxWidth: 350 }}
                    >
                        <PersonAvatar person={persons[id]} />
                    </Button>
                ))}
                <Button onClick={() => navigate({ personID: null })}>
                    <div
                        style={{
                            display: "inline-flex",
                            flexDirection: "column",
                            placeItems: "center",
                            padding: "0 1em",
                        }}
                    >
                        <div
                            className="person-avatar"
                            style={{
                                display: "flex",
                                placeItems: "center",
                                placeContent: "center",
                                background: "#ffffff1a",
                            }}
                        >
                            <PeopleIcon
                                style={{ fill: "white", fontSize: "650%" }}
                            />
                        </div>
                        <Typography
                            color="secondary"
                            variant="h4"
                            component="h2"
                            style={{
                                textAlign: "center",
                                color: "white",
                                fontFamily: "'Secular One', sans-serif",
                            }}
                        >
                            עוד
                        </Typography>
                        <Typography
                            color="primary"
                            variant="h5"
                            component="h3"
                            style={{
                                textAlign: "center",
                                fontFamily: "'Secular One', sans-serif",
                            }}
                        >
                            ח״כים מהשנים האחרונות
                        </Typography>
                    </div>
                </Button>
            </div>
        </div>
    );
});

const PersonAvatar = React.memo(function ({
    person,
}: {
    person: MinimalPerson;
}) {
    if (!person) return <CircularProgress />;

    const name = getFullName(person);
    const desc = [];
    if (person.FactionName) desc.push(person.FactionName);
    if (person.KnessetNum) desc.push(`הכנסת ה-${person.KnessetNum}`);

    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: "column",
                placeItems: "center",
                padding: "0 1em",
            }}
        >
            <div
                className="person-avatar"
                style={{
                    background: `url(${imageOrDefault(
                        person.imgPath,
                        name,
                        128
                    )}) center center / cover no-repeat`,
                }}
            ></div>
            <Typography
                color="secondary"
                variant="h4"
                component="h2"
                style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "'Secular One', sans-serif",
                }}
            >
                {name}
            </Typography>
            <Typography
                color="primary"
                variant="h5"
                component="h3"
                style={{
                    textAlign: "center",
                    fontFamily: "'Secular One', sans-serif",
                }}
            >
                {desc.join(", ")}
            </Typography>
        </div>
    );
});

function parseResponse(contents: FallbackPerson[]) {
    if (contents.length === 0) return null;

    const {
        PersonID,
        FirstName,
        LastName,
        Email,
        GenderDesc,
        imgPath,
        BirthCountry,
        BirthDate,
        CityName,
        FamilyStatus,
        ChildrenNumber,
        FactionName,
        KnessetNum,
    } = contents[0];

    // take generic values
    const general = {
        PersonID,
        FirstName,
        LastName,
        Email,
        GenderDesc,
        imgPath,
        BirthCountry,
        BirthDate,
        CityName,
        FamilyStatus,
        ChildrenNumber,
        FactionName,
        KnessetNum,
        Name: `${FirstName} ${LastName}`,
    };

    const positions = contents.map(
        ({
            PersonToPositionID,
            DutyDesc,
            GovMinistryName,
            FactionName,
            KnessetNum,
            IsCurrent,
            PositionStartDate,
            PositionFinishDate,
        }) => {
            const ret = {
                PersonToPositionID,
                DutyDesc,
                GovMinistryName,
                FactionName,
                KnessetNum,
                IsCurrent,
                PositionStartDate,
                PositionFinishDate,
            };
            return ret;
        }
    );

    return {
        ...general,
        positions,
        positionsByKnesset: getPositionsByKnesset(positions),
    };
}

function getPositionsByKnesset(positions: Position[]) {
    const res: Record<number, Position[]> = {};
    for (const pos of positions) {
        if (!res[pos.KnessetNum]) res[pos.KnessetNum] = [];
        res[pos.KnessetNum].push(pos);
    }
    return res;
}
