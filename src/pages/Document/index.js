import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import QuotesLoader from '../../components/QuotesLoader'
import Chat from '../../components/Chat'
import config from '../../config'
import { useQuery, usePersonID } from '../../utils'

const DocumentQuotes = React.memo(React.forwardRef(function ({type}, ref) {
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    return (
        <div ref={ref}>
            {loading && <QuotesLoader />}
            <QuoteView documentID={id} documentType={type} setLoading={setLoading} />
        </div>
    )
}))
export default DocumentQuotes

const QuoteView = React.memo(function ({documentID, documentType, setLoading}) {
    const [data, setData] = useState([])

    const personID = usePersonID()
    const query = useQuery()

    useEffect(() => {
        (async () => {
        if (!documentID)
            return
        setLoading(true)
        try {
            const res = await (await fetch(`${config.server}/DocumentQuotes?documentId=${documentID}&documentType=${documentType}`)).json()
            setData(res)
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
