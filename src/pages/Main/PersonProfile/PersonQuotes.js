import React, { useState, useEffect, useRef } from 'react'

import Loader from '../../../components/ChatLoader'
import Chat from '../../../components/Chat'
import config from '../../../config'
import { useQuery } from '../../../utils'
import { WhiteQuotesSearch } from '../../../components/QuotesSearch'

const PersonQuotes = React.memo(function ({personID}) {
    const [loading, setLoading] = useState(false)

    return (
        <>
            <div style={{padding: '0 50px 0 .5em', width: '100%'}}>
                <WhiteQuotesSearch showReset={false} />
            </div>
            <Loader show={loading} />
            <QuoteView personID={personID} setLoading={setLoading} />
        </>
    )
})
export default PersonQuotes

const QuoteView = React.memo(function ({personID, setLoading}) {
    const scrollRef = useRef(null)
    const [data, setData] = useState([])
    const query = useQuery()

    useEffect(() => {
        (async () => {
        if (!personID)
            return
        setLoading(true)
        setData([])
        try {
            const res = await (await fetch(`${config.server}/PersonQuotes?keyword=${query}&PersonID=${personID}`)).json()
            setData(res)
        } catch(e) {
            // TODO handle errors
            console.error(e)
            setData([])
        } finally {
            setLoading(false)
        }
        })()
    }, [query, personID, setLoading])

    if (!personID)
        return <div ref={scrollRef} />

    return (
        <div ref={scrollRef}>
            <Chat items={data.map(d => ({
                highlight: query,
                ...d,
            }))} />
        </div>
    );
})
