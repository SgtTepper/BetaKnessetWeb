import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react'
import TextTransition, { presets } from "react-text-transition"
import CircularProgress from '@material-ui/core/CircularProgress'

import quotes from './quotes.json'
import { shuffleArray } from '../../utils'

const Loader = React.memo(function ({show}) {
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
    }, [show])
  
  
    const currentQuote = shuffled[index % shuffled.length]
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%', height: '100%',
        top: 0, right: 0,
        background: 'white', 
        zIndex: 6,
        opacity: show ? .9 : 0,
          transition: 'opacity .15s ease-in-out',
        pointerEvents: 'none',
        }}>
        <div style={{display: 'inline-flex', flexDirection: 'row', placeContent: 'center', placeItems: 'center', width: '20%',
          paddingLeft: '25%', paddingBottom: '15%',background: 'white'}}>
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
    return (
      <div className='loader-quote'>
        <div className='quote-text' style={{background: 'white',fontSize:'17px', width:'40%'}}>{quote}</div>
        <div className='quote-name' style={{background: 'white', fontSize:'12px'}}>- {name}</div>
      </div>
    )
  })

  export default Loader
  