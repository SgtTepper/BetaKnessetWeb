import React from "react";

import { ScrollPage } from "../components/ScrollableView";
import { RouteComponentProps } from "react-router-dom";

const FrameApp = React.memo(function ({
    url,
    title,
}: RouteComponentProps & { title?: string; url?: string }) {
    return (
        <ScrollPage limit>
            <iframe
                title={title}
                src={url}
                style={{ flexGrow: 1, border: 0 }}
            />
        </ScrollPage>
    );
});
export default FrameApp;
