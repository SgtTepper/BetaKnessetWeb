import React, { useState, useEffect, useRef, useMemo } from 'react'
import TextTransition, { presets } from "react-text-transition"
import CircularProgress from '@material-ui/core/CircularProgress'

import quotes from './quotes.json'
import { shuffleArray } from '../../utils'
import { makeStyles } from '@material-ui/core'

// initial shuffle to avoid seeding first render
shuffleArray(quotes)

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100vh',
        top: 0,
        right: 0,
        background: 'white',
        zIndex: 6,
        transition: 'opacity .2s ease-in-out',
        pointerEvents: 'none',
    },
    quote: {
        fontStyle: 'italic',
        minWidth: '240px',
        "$bigLoader &": {
            marginTop: '-25px',
            marginRight: '2.5em',
        },
        "$smallLoader &": {
            width: '100%',
        },
    },
    text: {
        color: '#332',
        fontSize: '24px',
        fontWeight: 'bold',
        '&::first-letter': {
            fontSize: '200%',
            lineHeight: '60px',
        },
        "$smallLoader &": {
            fontSize: "20px",
        },
    },
    name: {
        color: '#555',
        fontSize: '18px',
        fontFamily: 'Helvetica, Verdana',
        paddingRight: '20px',
        "$smallLoader &": {
            fontSize: "15px",
            paddingRight: 0,
        },
    },

    smallLoader: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        justifyItems: 'center',
        width: '100%',
        height: '30%',
        // XXX hacky, but the transition library sucks, so whaterver - OP
        "& .text-transition_inner > div": {
            margin: "0 7.5%",
            width: "85%",
        }
    },
    bigLoader: {
        display: 'inline-flex',
        flexDirection: 'row',
        placeContent: 'center',
        placeItems: 'center',
        width: '100%',
        paddingLeft: '25%',
        paddingBottom: '15%',
    },
})

const Loader = React.memo(function ({show}) {
    const classes = useStyles()
    const isBigScreen = false
    const shuffled = useMemo(() => [...quotes], [])
    const [index, setIndex] = useState(0)
    const intervalId = useRef(null)

    useEffect(() => {
        if (show) {
            shuffleArray(shuffled)
            intervalId.current = setInterval(() => setIndex(index => index + 1), 4000)
        }
        else {
            clearInterval(intervalId.current)
        }
    }, [show, shuffled])

    const currentQuote = shuffled[index % shuffled.length]

    const contents = isBigScreen
        ? <>
            <CircularProgress />
            <TextTransition
                text={<Quote {...currentQuote} />}
                springConfig={ presets.wobbly }
            />
        </>
        : <>
            <div style={{placeSelf: 'center', flex: 1.5}}>
                <CircularProgress />
            </div>
            <div style={{flex: 1, textAlign: 'center'}}>
                <TextTransition
                    text={<Quote {...currentQuote} />}
                    springConfig={ presets.wobbly }
                />
            </div>
            <div style={{flex: 2}} />
        </>

    return (
        <div className={classes.root} style={{opacity: show ? .9 : 0,}}>
            <div className={isBigScreen ? classes.bigLoader : classes.smallLoader}>
                {contents}
            </div>
        </div>
    )
})

const Quote = React.memo(function ({name, quote}) {
    const classes = useStyles()
    return (
        <div className={classes.quote}>
            <div className={classes.text}>{quote}</div>
            <div className={classes.name}>{name}</div>
        </div>
    )
})

export default Loader