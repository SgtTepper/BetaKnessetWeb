import React from "react";

import { ScrollPage } from "../components/ScrollableView";

const FrameApp = React.memo(function ({ url, title }) {
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
