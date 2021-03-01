import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import QuotesLoader from '../../components/QuotesLoader'
import Chat from '../../components/Chat'
import config from '../../config'
import { useQuery, usePersonID } from '../../utils'
import { ScrollPage } from '../../components/ScrollableView'

const DocumentQuotes = React.memo(React.forwardRef(function ({type}, ref) {
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    return (            
        <ScrollPage id='document-quotes' parentStyle={{backgroundColor: 'black'}}>
            <div ref={ref}>
                {loading && <QuotesLoader />}
                <QuoteView documentID={id} documentType={type} setLoading={setLoading} />
            </div>
        </ScrollPage>
    )
}))
export default DocumentQuotes

const QuoteView = React.memo(function ({documentID, documentType, setLoading}) {
    const [data, setData] = useState([])
    const [, setMetadata] = useState([])

    const personID = usePersonID()
    const query = useQuery()

    useEffect(() => {
        (async () => {
        if (!documentID)
            return
        setLoading(true)
        try {
            const quotes = await (await fetch(`${config.server}/DocumentQuotes?documentId=${documentID}&documentType=${documentType}`)).json()
            const enrichment = await (await fetch(`${config.server}/DocumentTopics?documentId=${documentID}&documentType=${documentType}`)).json()
            setData(quotes)            
            setMetadata(enrichment)
        } catch(e) {
            // TODO handle errors
            console.error(e)
            setData([])
        } finally {
            setLoading(false)
        }
        })()
    }, [documentID, personID, documentType, setLoading])

    let prevSpeaker = null
    return (
        <>
            <Chat items={data.map(d => {
                const ret = {
                    highlight: query,
                    isSpeaker: personID === d.PersonID,
                    isContinuation: prevSpeaker === d.Speaker,
                    isInProtocol: true,
                    ...d,
                }
                prevSpeaker = d.Speaker
                return ret
            })} />
        </>
    );
})
