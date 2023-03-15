import React, { useCallback, useState, useLayoutEffect, useRef } from "react";
import Dialog from "./Dialog";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import InputAdornment from "@material-ui/core/InputAdornment";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { FormatQuote } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useQuery, useNavigate } from "../utils";

const QuotesSearch = React.memo(function ({
    style,
    variant,
    placeholder,
    showReset = true,
}) {
    const textRef = useRef();
    const navigate = useNavigate();
    const query = useQuery();
    const [queryInput, setQueryInput] = useState(query);
    const [guideOpen, setGuideOpen] = useState(false);

    const search = useCallback(
        () => navigate({ q: queryInput }),
        [queryInput, navigate]
    );

    useLayoutEffect(() => {
        setQueryInput(query);
    }, [query]);

    return (
        <div style={{ width: "100%", zIndex: 20 }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    search();
                }}
                style={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <SearchDialog open={guideOpen} setOpen={setGuideOpen} />

                <TextField
                    color="primary"
                    variant={variant || "outlined"}
                    placeholder={placeholder}
                    value={queryInput}
                    inputRef={textRef}
                    onInput={(e) => setQueryInput(e.target.value)}
                    style={{ flexGrow: 1 }}
                    InputProps={{
                        style,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setGuideOpen(true)}>
                                    <HelpOutlineIcon
                                        style={
                                            style?.color && {
                                                fill: style?.color,
                                            }
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    onClick={search}
                                    disabled={
                                        query === queryInput ||
                                        !queryInput.length
                                    }
                                >
                                    <FormatQuote
                                        style={
                                            style?.color && {
                                                fill: style?.color,
                                            }
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {showReset && (
                    <IconButton
                        color="primary"
                        onClick={() =>
                            queryInput !== query
                                ? search()
                                : navigate({ q: null })
                        }
                        disabled={!queryInput.length}
                        style={{ paddingTop: "6px" }}
                    >
                        {queryInput.length && queryInput === query ? (
                            <ClearIcon
                                style={style?.color && { fill: style?.color }}
                            />
                        ) : (
                            <SearchIcon
                                style={style?.color && { fill: style?.color }}
                            />
                        )}
                    </IconButton>
                )}
            </form>
        </div>
    );
});

export function SearchDialog(props) {
    const { setOpen } = props;
    const navigate = useNavigate();

    const showQuotes = (e, q) => {
        e.preventDefault();
        navigate({ q });
        setOpen(false);
    };

    return (
        <Dialog {...props} closeText={"השכלתי"}>
            <Typography color="primary" variant="h4" component="h4">
                חיפוש מתקדם
            </Typography>
            <br></br>
            <b>איך מחפשים מונח?</b>
            <p>פשוט מקלידים את המילה ומחפשים, למשל:</p>
            <p style={{ color: "#062350", textAlign: "center" }}>
                <b>
                    <i>
                        <a href="/" onClick={(e) => showQuotes(e, "פנסיה")}>
                            פנסיה
                        </a>
                    </i>
                </b>
            </p>
            <b>איך מחפשים משפט?</b>
            <p>פשוט מקלידים את המשפט ומחפשים, למשל:</p>
            <p style={{ color: "#062350", textAlign: "center" }}>
                <b>
                    <i>
                        <a href="/" onClick={(e) => showQuotes(e, "ילדי תימן")}>
                            ילדי תימן
                        </a>
                    </i>
                </b>
            </p>
            <b>איך מחפשים כמה מונחים בו זמנית?</b>
            <p>פשוט מקלידים את המילים או המשפטים מופרדים עם התו ^, למשל:</p>
            <p style={{ color: "#062350", textAlign: "center" }}>
                <b>
                    <i>
                        <a
                            href="/"
                            onClick={(e) => showQuotes(e, "בעד^הקהילה הגאה")}
                        >
                            בעד^הקהילה הגאה
                        </a>
                    </i>
                </b>
            </p>
            <p>
                אם עדין אין לכם רעיון מה לחפש, מוזמנים לבחור באחת מבועות הנושאים
                שלנו.
            </p>
        </Dialog>
    );
}

export default QuotesSearch;

export function WhiteQuotesSearch({ style, ...props }) {
    return (
        <QuotesSearch
            style={{
                color: "white",
                borderBottom: "2px solid white",
                ...style,
            }}
            variant="standard"
            {...props}
        />
    );
}
