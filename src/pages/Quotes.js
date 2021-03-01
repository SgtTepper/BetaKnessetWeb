import React, { useState, useEffect, useRef } from 'react'

import { ScrollPage } from '../components/ScrollableView'
import Loader from '../components/ChatLoader'
import Chat from '../components/Chat'
import { WhiteQuotesSearch } from '../components/QuotesSearch'
import config from '../config'
import { useQuery } from '../utils'
import defaultTopics from '../defaultTopics'

const Quotes = React.memo(function () {
    const [loading, setLoading] = useState(false)
    const randomTopic = defaultTopics[Math.floor(Math.random() * defaultTopics.length)]

    return (
        <ScrollPage limit id='quotes' parentStyle={{backgroundColor: '#223388'}}>
            <div style={{position: 'relative', width: '100%', maxWidth: '850px', height: '100%', overflowY: 'auto', zIndex: 2, paddingTop: '1em'}}>
                <WhiteQuotesSearch placeholder={`כל נושא שהוא, לדוגמא "${randomTopic}"`} showReset={false} />
                <Loader show={loading} />
                <QuoteView setLoading={setLoading} />
            </div>
        </ScrollPage>
    )
})
export default Quotes

const QuoteView = React.memo(function ({setLoading}) {
    const scrollRef = useRef(null)
    const [data, setData] = useState([])
    const query = useQuery()

    useEffect(() => {
        (async () => {
        if (!query.length)
            return
        setLoading(true)
        setData([])
        try {
            const res = await (await fetch(`${config.server}/Quotes?keyword=${query}`)).json()
            setData(res)
        } catch(e) {
            // TODO handle errors - (ex: when multi term search is empty)
            console.error(e)
            setData([])
        } finally {
            setLoading(false)
        }
        })()
    }, [query, setLoading])

    return (
        <div ref={scrollRef}>
            <Chat items={data.map(d => ({
                highlight: query,
                ...d,
            }))} />
        </div>
    );
})