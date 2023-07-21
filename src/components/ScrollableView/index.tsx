import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useBigScreen, useWindowSize } from "../../utils";
import { CSSProperties, PropsWithChildren } from "react";

const useStyles = makeStyles((theme) => ({
    scrollView: {
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
        height: "100%",
        scrollBehavior: "smooth",
        [theme.breakpoints.down("sm")]: {
            scrollBehavior: "auto",
        },

        ".smallScreen &": {
            scrollSnapType: "none",
        },
    },
    smallScreen: {},

    scrollPage: {
        display: "flex",
        flexDirection: "column",
        placeContent: "stretch",
        position: "relative",
        scrollSnapAlign: "start",
        overflowY: "hidden",
    },

    wrapper: {
        zIndex: 2,
        display: "flex",
        placeContent: "center",
        position: "relative",
        width: "100%",
        overflowY: "hidden",
    },

    limitScreen: {
        height: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
    },
}));

export default function ScrollableView({ children }: PropsWithChildren) {
    const classes = useStyles();
    return <div className={classes.scrollView}>{children}</div>;
}

export function ScrollPage({
    children,
    limit,
    parentStyle,
    style,
    className,
    ...props
}: PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    parentStyle?: CSSProperties;
    limit: boolean;
    id?: string;
}>) {
    const classes = useStyles();

    // XXX hack for 100% screen scrollable size (flex 100% doesnt work well for all browsers)
    const windowSize = useWindowSize();
    const isBigScreen = useBigScreen();
    const minHeight = limit
        ? // TODO: Extract this nested ternary operation into an independent statement.sonarlint(typescript:S3358)
          windowSize.height - (isBigScreen ? 55 : 48)
        : "initial";

    return (
        <div
            className={clsx(classes.scrollPage, limit && classes.limitScreen)}
            style={parentStyle}
        >
            <div
                className={clsx(
                    classes.wrapper,
                    limit && classes.limitScreen,
                    className
                )}
                style={{ ...style, minHeight }}
                {...props}
            >
                {children}
            </div>
        </div>
    );
}
