import React, { useState, useEffect, useMemo } from "react";
import TextTransition, { presets } from "react-text-transition";
import CircularProgress from "@material-ui/core/CircularProgress";

import quotes from "./quotes.json";
import { useBigScreen, shuffleArray } from "../../utils";
import { makeStyles } from "@material-ui/core";

// initial shuffle to avoid seeding first render
shuffleArray(quotes);

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: 0,
        right: 0,
        background: "white",
        zIndex: 5,
        transition: "opacity .2s ease-in-out",
        pointerEvents: "none",
    },
    quote: {
        fontStyle: "italic",
        minWidth: "240px",
        "$bigLoader &": {
            marginTop: "-25px",
            marginRight: "2.5em",
        },
        "$smallLoader &": {
            width: "100%",
        },
    },
    text: {
        color: "#332",
        fontSize: "24px",
        fontWeight: "bold",
        "&::first-letter": {
            fontSize: "200%",
            lineHeight: "60px",
        },
        "$smallLoader &": {
            fontSize: "20px",
        },
    },
    name: {
        color: "#555",
        fontSize: "18px",
        fontFamily: "Helvetica, Verdana",
        paddingRight: "20px",
        "$smallLoader &": {
            fontSize: "15px",
            paddingRight: 0,
        },
    },

    smallLoader: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        alignItems: "stretch",
        justifyItems: "center",
        width: "100%",
        height: "30%",
        // XXX hacky, but the transition library sucks, so whaterver - OP
        "& .text-transition_inner > div": {
            margin: "0 7.5%",
            width: "85%",
        },
    },
    bigLoader: {
        display: "inline-flex",
        flexDirection: "row",
        placeContent: "center",
        placeItems: "center",
        width: "100%",
        paddingLeft: "25%",
        paddingBottom: "15%",
    },
});

const Loader = React.memo(function ({ show }: { show: boolean }) {
    const classes = useStyles();
    const isBigScreen = useBigScreen();
    const shuffled = useMemo(() => [...quotes], []);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (show) {
            shuffleArray(shuffled);
            const intervalId = setInterval(
                () => setIndex((index) => index + 1),
                4000
            );

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [show, shuffled]);

    const currentQuote = shuffled[index % shuffled.length];

    const contents = isBigScreen ? (
        <>
            <CircularProgress />
            <TextTransition springConfig={presets.wobbly}>
                <Quote {...currentQuote} />
            </TextTransition>
        </>
    ) : (
        <>
            <div style={{ placeSelf: "center", flex: 1.5 }}>
                <CircularProgress />
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Quote {...currentQuote} />
                </TextTransition>
            </div>
            <div style={{ flex: 2 }} />
        </>
    );

    return (
        <div className={classes.root} style={{ opacity: show ? 0.9 : 0 }}>
            <div
                className={
                    isBigScreen ? classes.bigLoader : classes.smallLoader
                }
            >
                {contents}
            </div>
        </div>
    );
});

const Quote = React.memo(function ({
    name,
    quote,
}: {
    name: string;
    quote: string;
}) {
    const classes = useStyles();
    return (
        <div className={classes.quote}>
            <div className={classes.text}>{quote}</div>
            <div className={classes.name}>{name}</div>
        </div>
    );
});

export default Loader;
