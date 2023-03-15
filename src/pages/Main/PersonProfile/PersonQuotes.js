import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";

import Loader from "../../../components/ChatLoader";
import Chat from "../../../components/Chat";
import config from "../../../config";
import { useQuery, useCancellableFetch } from "../../../utils";
import { WhiteQuotesSearch } from "../../../components/QuotesSearch";

const PersonQuotes = React.memo(function ({ personID }) {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className="person-quotes-search">
                <WhiteQuotesSearch
                    placeholder="מה מעניין אותם?"
                    showReset={false}
                />
            </div>
            <Loader show={loading} />
            <QuoteView
                personID={personID}
                loading={loading}
                setLoading={setLoading}
            />
        </>
    );
});
export default PersonQuotes;

const QuoteView = React.memo(function ({ personID, loading, setLoading }) {
    const [data, setData] = useState([]);
    const query = useQuery();
    const serverFetch = useCancellableFetch();

    useEffect(() => {
        (async () => {
            if (!personID) return;
            setLoading(true);
            setData([]);
            try {
                const res = await serverFetch(
                    `${config.server}/PersonQuotes?keyword=${query}&PersonID=${personID}`
                );
                setData(res);
            } catch (e) {
                // TODO handle errors
                console.error(e);
                setData([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [query, personID, setLoading, serverFetch]);

    if (!personID || loading) return null;

    if (!data.length)
        return (
            <Typography
                variant="h6"
                style={{
                    fontStyle: "italic",
                    color: "white",
                    paddingTop: "1em",
                    textAlign: "center",
                }}
            >
                לא נמצאו ציטוטים שלי{query?.length ? ` על ${query}` : ""}
            </Typography>
        );

    return (
        <Chat
            items={data.map((d) => ({
                highlight: query,
                ...d,
            }))}
        />
    );
});
