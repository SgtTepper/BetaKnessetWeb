import React from 'react'

import { ScrollPage } from '../components/ScrollableView'

const FrameApp = React.memo(function ({url, title}) {
    return (
        <ScrollPage limit>
            <div style={{
                position: 'relative', 
                height: '100%', 
                width: '100%', 
                overflow: 'hidden',
                zIndex: 2, 
                display: 'flex', 
                flexDirection: 'column',
                placeContent: 'stretch',
            }}>
                <iframe title={title} src={url} style={{flexGrow: 1, border: 0}} />
            </div>
        </ScrollPage>
    )
})
export default FrameApp