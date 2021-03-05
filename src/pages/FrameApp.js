import React from 'react'

import { ScrollPage } from '../components/ScrollableView'

const FrameApp = React.memo(function ({url, title}) {
    return (
        <ScrollPage limit>
            <div style={{
                position: 'relative', 
                height: '100%', 
                width: '100%', 
                overflowY: 'auto', 
                zIndex: 2, 
                display: 'flex', 
                placeContent: 'center'
            }}>
                <iframe title={title} src={url} style={{width: '100%', height: '100%'}} />
            </div>
        </ScrollPage>
    )
})
export default FrameApp