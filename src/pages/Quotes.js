import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography'

import { ScrollPage } from '../components/ScrollableView'
import Loader from '../components/ChatLoader'
import Chat from '../components/Chat'
import { WhiteQuotesSearch } from '../components/QuotesSearch'
import config from '../config'
import { useBigScreen, useQuery } from '../utils'
import defaultTopics from '../defaultTopics'

const Quotes = React.memo(function () {
    const [loading, setLoading] = useState(false)
    const randomTopic = defaultTopics[Math.floor(Math.random() * defaultTopics.length)]
    const isBigScreen = useBigScreen()
    const prefix = isBigScreen ? "כל נושא שהוא, " : ""

    return (
        <ScrollPage limit id='quotes' parentStyle={{backgroundColor: '#223388'}}>
            <div style={{
                position: 'relative', 
                height: '100%', 
                width: '100%', 
                overflowY: 'auto', 
                zIndex: 2, 
                display: 'flex', 
                placeContent: 'center'
            }}>
                <div style={{maxWidth: '850px', width: '100%'}}>
                    <div style={{padding: '.5em'}}>
                        <WhiteQuotesSearch placeholder={`${prefix}לדוגמא "${randomTopic}"`} />
                        <Loader show={loading} />
                        <QuoteView loading={loading} setLoading={setLoading} />
                    </div>
                </div>
            </div>
        </ScrollPage>
    )
})
export default Quotes

const QuoteView = React.memo(function ({loading, setLoading}) {
    const [data, setData] = useState([])
    const query = useQuery()

    useEffect(() => {
        (async () => {
            setData([])
            if (!query.length)
                return
            setLoading(true)
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

    if (loading)
        return null

    if (!data.length) 
        return (
            <Typography 
                variant="h6" 
                style={{fontStyle: 'italic', color: 'white', paddingTop: '1em', textAlign: 'center'}}
            >
                לא נמצאו ציטוטים בנושא {query}
            </Typography>
        )

    return (
        <Chat items={data.map(d => ({
            highlight: query,
            ...d,
        }))} />
    );
})