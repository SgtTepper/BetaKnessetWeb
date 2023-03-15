import React, { useState, useLayoutEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { usePersonID, useNavigate, getFullName } from "../utils";

const PersonSearch = React.memo(function ({ persons, style, variant }) {
    const navigate = useNavigate();
    const personID = usePersonID();
    const [inputValue, setInputValue] = useState("");

    useLayoutEffect(() => {
        if (personID) setInputValue(getFullName(persons[personID]));
    }, [persons, personID]);

    return (
        <div style={{ width: "100%", zIndex: 20 }}>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <Autocomplete
                    options={Object.keys(persons)}
                    getOptionLabel={(id) => getFullName(persons[id])}
                    getOptionSelected={(id) => parseInt(id) === personID}
                    value={personID || 0}
                    onChange={(event, newValue) => {
                        navigate({ personID: newValue });
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    style={{ flexGrow: 1 }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant={variant || "outlined"}
                            placeholder='שם של ח"כ'
                            InputProps={{
                                ...params.InputProps,
                                style,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon
                                            style={
                                                style?.color && {
                                                    fill: style?.color,
                                                }
                                            }
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                navigate({ personID: null })
                                            }
                                            disabled={personID == null}
                                        >
                                            <ClearIcon
                                                style={
                                                    style?.color && personID
                                                        ? { fill: style?.color }
                                                        : {}
                                                }
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    forcePopupIcon={false}
                    disableClearable={true}
                    noOptionsText={"אין תוצאות"}
                />
            </div>
        </div>
    );
});

export default PersonSearch;
