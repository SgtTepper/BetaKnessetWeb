import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    // rtl fixes
    direction: "rtl",
    overrides: {
        MuiInputAdornment: {
            positionStart: {
                marginRight: 0,
            },
            positionEnd: {
                marginLeft: 0,
            },
        },
        MuiListItem: {
            root: {
                textAlign: "right",
            },
        },
    },

    palette: {
        primary: {
            main: "#0d47a1",
        },
        secondary: {
            main: "#90756d",
        },
        pronounced: {
            main: "white",
        },
    },
    typography: {
        fontFamily: ['"Secular One"', "sans-serif"],
    },
});
export default theme;
