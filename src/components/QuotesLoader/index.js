import React, { useState, useEffect, useRef, useMemo } from 'react'
import TextTransition, { presets } from "react-text-transition"
import CircularProgress from '@material-ui/core/CircularProgress'

import quotes from './quotes.json'
import { shuffleArray } from '../../utils'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    width: '100%', height: '100%', 
    top: 0, right: 0,
    background: 'white', 
    zIndex: 5, 
    transition: 'opacity .2s ease-in-out',
    pointerEvents: 'none',
  },
  quote: {
    marginTop: '-25px',
    marginRight: '2.5em',
    fontStyle: 'italic',
    minWidth: '350px',
  },
  text: {
    color: '#332',
    fontSize: '24px',
    fontWeight: 'bold',
    '&::first-letter': {
      fontSize: '200%',
      lineHeight: '60px',
    },
  },
  name: {
    color: '#555',
    fontSize: '18px',
    fontFamily: 'Helvetica, Verdana',
    paddingRight: '20px',
  }
})

const Loader = React.memo(function ({show}) {
    const classes = useStyles()
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
  
    return (
      <div className={classes.root} style={{opacity: show ? .9 : 0,}}>
        <div style={{display: 'inline-flex', flexDirection: 'row', placeContent: 'center', placeItems: 'center', width: '100%',
          paddingLeft: '25%', paddingBottom: '15%'}}>
          <CircularProgress />
          <TextTransition
            text={<Quote {...currentQuote} />}
            springConfig={ presets.wobbly }
          />
        </div>
      </div>
    )
  })
  
  const Quote = React.memo(function ({name, quote}) {
    const classes = useStyles()
    return (
      <div className={classes.quote}>
        <div className={classes.text}>{quote}</div>
        <div className={classes.name}>- {name}</div>
      </div>
    )
  })

  export default Loader
  