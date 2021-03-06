import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'

import { ScrollPage } from '../components/ScrollableView'
import Loader from '../components/ChatLoader'
import Chat from '../components/Chat'
import { WhiteQuotesSearch } from '../components/QuotesSearch'
import config from '../config'
import { useBigScreen, useCancellableFetch, useQuery } from '../utils'
import defaultTopics from '../defaultTopics'

const Quotes = React.memo(function () {
    const [loading, setLoading] = useState(false)
    const randomTopic = defaultTopics[Math.floor(Math.random() * defaultTopics.length)]
    const isBigScreen = useBigScreen()
    const prefix = isBigScreen ? "כל נושא שהוא, " : ""
    const serverFetch = useCancellableFetch()
    const [data, setData] = useState({})
    const query = useQuery()

    useEffect(() => {
        (async () => {
            setData({})
            if (!query.length)
                return
            setLoading(true)
            try {
                const res = await serverFetch(`${config.server}/Quotes?keyword=${query}`)
                setData(res)
            } catch(e) {
                // TODO handle errors - (ex: when multi term search is empty)
                console.error(e)
                setData({})
            } finally {
                setLoading(false)
            }
        })()
    }, [query, serverFetch])

    return (
        <ScrollPage limit id='quotes' parentStyle={{backgroundColor: '#223388'}}>
            <div style={{
                position: 'relative', 
                height: '100%', 
                width: '100%', 
                zIndex: 2, 
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column',
                    placeContent: 'stretch',
                    height: '100%',
                }}>
                    <div style={{display: 'flex', placeContent: 'center', padding: '.5em'}}>
                        <div style={{maxWidth: '850px', width: '100%'}}>
                            <WhiteQuotesSearch placeholder={`${prefix}לדוגמא "${randomTopic}"`} />
                            {data.count > 0 &&
                                <Typography style={{textAlign: 'left', color: "#ddd"}}>
                                    {data.count === 1
                                        ? "תוצאה אחת"
                                        : `${numberWithCommas(data.count)} תוצאות`
                                    }
                                    {data.count > data.quotes.length && ` (מציג ${data.quotes.length} אחרונות)`}
                                </Typography>
                            }
                        </div>
                    </div>
                    <div style={{overflowY: 'auto', display: 'flex', placeContent: 'center', padding: '.5em'}}>
                        <div style={{maxWidth: '850px', width: '100%'}}>
                            <Loader show={loading} />
                            {(!loading && query.length && data.count === 0) ?
                                <>
                                    <Typography 
                                        variant="h6" 
                                        style={{fontStyle: 'italic', color: 'white', paddingTop: '1em', textAlign: 'center'}}
                                    >
                                        לא נמצאו ציטוטים בנושא {query}
                                    </Typography>
                                </>
                            : null}
                            {(!loading && data.count > 0) &&
                                <QuoteView query={query} quotes={data.quotes} />}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollPage>
    )
})
export default Quotes

const QuoteView = React.memo(function ({query, quotes}) {
    return (
        <Chat items={quotes.map(d => ({
            highlight: query,
            ...d,
        }))} />
    )
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}