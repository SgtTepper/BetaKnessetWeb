import React, { useState, useEffect, useRef } from 'react'

import { ScrollPage } from '../../components/ScrollableView'
import Loader from '../../components/ChatLoader'
import Chat from '../../components/Chat'
import config from '../../config'
import { useQuery } from '../../utils'
import { Typography } from '@material-ui/core'

const Quotes = React.memo(function () {
    const query = useQuery()
    const [loading, setLoading] = useState(false)
    return (
        <ScrollPage limit id='quotes' parentStyle={{backgroundColor: '#223388'}}>
            <Typography color="secondary" variant="h2" component="h2" gutterBottom 
                    style={{textAlign: 'center', color: 'white', fontFamily: "'Secular One', sans-serif", paddingTop: '2vh'}}>
                    {query.length ? `ציטוטים בנושא ״${query}״` : "אמירות אחרונות"}
            </Typography>
            <div style={{position: 'relative', width: '100%', maxWidth: '850px', height: '100%', overflowY: 'auto', zIndex: 2}}>
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