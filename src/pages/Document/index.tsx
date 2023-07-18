import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { RouteComponentProps, useParams } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Fab from "@material-ui/core/Fab";
import QuotesLoader from "../../components/QuotesLoader";
import Chat from "../../components/Chat";
import config from "../../config.json";
import {
    useCancellableFetch,
    useBigScreen,
    useQuery,
    useIndex,
    usePersonID,
    toNiceDate,
} from "../../utils";
import { ScrollPage } from "../../components/ScrollableView";
import ChatLoader from "../../components/ChatLoader";
import { Quote } from "../../@types";

const useStyles = makeStyles({
    root: {
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 2,
    },
    grid: {
        display: "grid",
        height: "100%",
        gridTemplateColumns: "3fr 1fr",
        gridTemplateRows: "1fr",
        gap: "0% 2%",
        gridTemplateAreas: ". .",
        "& $metadata": {
            minWidth: 275,
            margin: "1em",
            alignSelf: "flex-start",
        },
    },

    flex: {
        overflowY: "auto",
        height: "100%",
    },

    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    bigScreen: {
        "& $drawerPaper": {
            maxWidth: "35vw",
        },
    },
    smallScreen: {
        "& $drawerPaper": {
            maxHeight: "50vh",
        },
    },
    drawer: {},

    metadata: {},
    drawerPaper: {},
});

const DocumentQuotes = React.memo(function ({
    type,
}: RouteComponentProps<{
    id: string;
}> & { type: string }) {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const isBigScreen = useBigScreen();
    const [drawerOpen, setDrawerOpen] = useState(true);
    // TODO : understand how to reimplement
    const createToggleDrawer = (open: boolean) => (event: any) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    return (
        <ScrollPage
            limit
            id="document-quotes"
            parentStyle={{ backgroundColor: "black" }}
        >
            <div className={classes.root}>
                <QuotesLoader show={loading} />
                <div className={classes.flex}>
                    <QuoteView
                        documentID={id}
                        documentType={type}
                        setLoading={setLoading}
                    />
                    <Drawer
                        anchor={isBigScreen ? "right" : "bottom"}
                        open={drawerOpen}
                        onClose={createToggleDrawer(false)}
                        className={clsx(
                            classes.drawer,
                            isBigScreen
                                ? classes.bigScreen
                                : classes.smallScreen
                        )}
                        classes={{ paper: classes.drawerPaper }}
                    >
                        <Metadata documentID={id} documentType={type} />
                    </Drawer>
                    <Fab
                        color="primary"
                        style={{
                            position: "absolute",
                            left: "2em",
                            bottom: "2em",
                        }}
                        onClick={createToggleDrawer(true)}
                    >
                        <DescriptionIcon />
                    </Fab>
                </div>
            </div>
        </ScrollPage>
    );
});
export default DocumentQuotes;

const QuoteView = React.memo(function ({
    documentID,
    documentType,
    setLoading,
}: {
    documentID: string;
    documentType: string;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [data, setData] = useState<Quote[]>([]);

    const personID = usePersonID();
    const query = useQuery();
    const index = useIndex();
    const serverFetch = useCancellableFetch();

    useEffect(() => {
        (async () => {
            if (!documentID) return;
            setLoading(true);
            try {
                const quotes = (await serverFetch(
                    `${config.server}/DocumentQuotes?documentId=${documentID}&documentType=${documentType}&index=${index}`
                )) as Quote[];
                setData(quotes);
            } catch (e) {
                // TODO handle errors
                console.error(e);
                setData([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [documentID, documentType, index, setLoading, serverFetch]);

    let prevSpeaker: string | null = null;
    return (
        <div
            style={{
                width: "100%",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                placeContent: "center",
            }}
        >
            <FullProtocolButton url={data[0]?.FilePath} />
            <Chat
                items={data.map((d) => {
                    const ret = {
                        highlight: query,
                        isSpeaker: personID === d.PersonID,
                        isContinuation: prevSpeaker === d.Speaker,
                        isInProtocol: true,
                        ...d,
                    };
                    prevSpeaker = d.Speaker;
                    return ret;
                })}
            />
            <FullProtocolButton url={data[0]?.FilePath} />
        </div>
    );
});

const Metadata = React.memo(function ({
    documentID,
    documentType,
}: {
    documentID: string;
    documentType: string;
}) {
    const classes = useStyles();
    const [metadata, setMetadata] = useState<
        | [
              {
                  Name?: string;
                  KnessetNum?: string;
                  StartDate?: string;
                  Ordinal?: string;
                  BroadcastUrl?: string;
                  FilePath?: string;
                  ItemName?: never[];
              }
          ]
        | null
    >(null);
    const serverFetch = useCancellableFetch();

    useEffect(() => {
        (async () => {
            if (!documentID) return;
            try {
                const enrichment = await serverFetch(
                    `${config.server}/DocumentTopics?documentId=${documentID}&documentType=${documentType}`
                );
                if (!enrichment.length) {
                    console.error("No metadata found, this is a server error");
                }
                setMetadata(enrichment);
            } catch (e) {
                // TODO handle errors
                console.error(e);
                setMetadata(null);
            }
        })();
    }, [documentID, documentType, serverFetch]);

    if (!metadata) return <ChatLoader />;

    const md = metadata[0];
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Container>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    צפיה בפרוטוקול
                </Typography>
                <Typography variant="h6" component="h2">
                    {documentType === "committee" &&
                        (md?.Name?.length ? md.Name : "ועדה (פרטים חלקיים)")}
                    {documentType === "plenum" && "ישיבת מליאה"}
                </Typography>
                {md?.KnessetNum && (
                    <Typography className={classes.pos} color="textSecondary">
                        הכנסת ה-{md.KnessetNum}
                        {bull}
                        {md.StartDate && toNiceDate(new Date(md.StartDate))}
                    </Typography>
                )}
                <Typography variant="body2" component="div">
                    <List>
                        {metadata
                            ?.filter((m) => m.ItemName?.length)
                            .map((m) => (
                                <ListItem key={m.Ordinal}>
                                    <ListItemIcon>
                                        <ChatBubbleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={m.ItemName}
                                        primaryTypographyProps={{
                                            style: { textAlign: "right" },
                                        }}
                                    />
                                </ListItem>
                            ))}
                    </List>
                </Typography>
            </CardContent>
            <CardActions>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                    }}
                >
                    {md?.FilePath && (
                        <Button
                            endIcon={
                                <DescriptionIcon
                                    style={{ paddingRight: "1em" }}
                                />
                            }
                            size="small"
                            variant="contained"
                            href={md.FilePath}
                            target="_blank"
                            rel="noreferrer"
                        >
                            לפרוטוקול המקורי
                        </Button>
                    )}
                    {md?.BroadcastUrl && (
                        <Button
                            endIcon={
                                <LiveTvIcon style={{ paddingRight: "1em" }} />
                            }
                            size="small"
                            variant="contained"
                            href={md.BroadcastUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            לשידור הישיבה
                        </Button>
                    )}
                </div>
            </CardActions>
        </Container>
    );
});

const FullProtocolButton = React.memo(function ({ url }: { url: string }) {
    if (!url) return null;
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                placeItems: "center",
                placeContent: "center",
            }}
        >
            <Button
                color="secondary"
                variant="contained"
                size="large"
                style={{ margin: "1em" }}
                href={url}
                target="_blank"
                rel="noreferrer"
                startIcon={
                    <DescriptionIcon
                        style={{ paddingLeft: "1em", marginRight: "-.5em" }}
                    />
                }
            >
                לפרוטוקול המלא...
            </Button>
        </div>
    );
});
