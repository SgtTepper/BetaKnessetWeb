import React, { useState, useEffect, useCallback } from 'react'

import "react-vis/dist/style.css"
import Highlighter from "react-highlight-words"
import {Treemap} from 'react-vis'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { useHistory } from "react-router-dom"

import QuotesLoader from '../../../../components/QuotesLoader'
import { useQuery, toNiceDate, imageOrDefault, useWindowSize, shuffleArray, useNavigate } from '../../../../utils'
import config from '../../../../config'

import defaultBubbles from './defaultBubbles'

const makeDefaultBubbles = queries => {
  shuffleArray(queries)
  const queriesCopy = queries.slice(0, config.defaultBubblesCount)
  const sizes = new Array(queriesCopy.length).fill(null).map(_ => 5 + Math.random() * 10)
  const max = Math.max(...sizes)

  const res = queriesCopy.map((s, i) => makeDefaultBubble(s, sizes[i], max))
  res.push({
    element: <MoreSuggestionsBubble />,
    query: null,
    size: max / 2,
    color: max / 2,
    style: {
      color: 'black',
      fontStyle: 'italic',
      fontSize: `175%`,
      animation: `pulse ${4 + Math.random() * 10}s ease-in-out infinite`,
      animationDelay: `-${Math.random() * 10}s`,
      animationDirection: 'alternate',
      backgroundColor: `#ddd`,
    }
  })
  return res
}
const makeDefaultBubble = (s, size, max) => {
  const lightness = (.4 + Math.random() * .5)
  return {
    element: <SuggestionBubble key={s} query={s} />,
    query: s,
    size: size,
    color: size,
    style: {
      color: lightness > .65 ? "#333" : "white",
      fontSize: `${(.65 + size / max) * 100}%`,
      animation: `pulse ${4 + Math.random() * 10}s ease-in-out infinite`,
      animationDelay: `-${Math.random() * 10}s`,
      animationDirection: 'alternate',
      backgroundColor: `hsl(${Math.round(230 + Math.random() * 5)}, ${(.25 + Math.random() * .4) * 100}%, ${lightness * 100}%)`,
    }
  }
}

const MIN_RATIO_FOR_IMAGE = .035

const PersonTooltip = withStyles((theme) => ({
    tooltip: {
      boxShadow: theme.shadows[1],
    },
  }))(Tooltip);

const Bubble = React.memo(function ({viewPersonQuotes}) {
    const [loading, setLoading] = useState(false)

    return (
        <>
            <QuotesLoader show={loading} />
            <Chart setLoading={setLoading} viewPersonQuotes={viewPersonQuotes} />
        </>
    )
})
export default Bubble

const Chart = React.memo(function ({setLoading}) {
    const history = useHistory()
    const windowSize = useWindowSize()
    const [data, setData] = useState(makeDefaultBubbles(defaultBubbles))
    const query = useQuery()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
        if (!query.length) {
          setData(makeDefaultBubbles(defaultBubbles))
          return
        }
        setLoading(true)
        try {
            // handle hebrew quotes (״)
            const cleanQuery = query.replace('״', '"')

            const res = await (await fetch(`${config.server}/Keywords?keyword=${cleanQuery}`)).json()
            const total = res.map(r => r.Counter).reduce((a, b) => a + b, 0)
            setData(res.filter(r => r.Counter / total > MIN_RATIO_FOR_IMAGE || r.mk_imgPath !== null).map(r => ({
            result: r,
            element: <PersonShortName key={r.PersonID} {...r} query={cleanQuery} ratio={r.Counter / total} />,
            size: r.Counter,
            color: r.Counter,
            style: {
                background: `url(${imageOrDefault(r.mk_imgPath, r.PersonID.toString(), 256)}) no-repeat center center`,
                backgroundSize: 'cover',
                color: '#ddd',
                cursor: 'pointer',
            }
            })))
        } catch(e) {
            // TODO handle errors
            console.error(e)
            setData(makeDefaultBubbles(defaultBubbles))
        } finally {
            setLoading(false)
        }
        })()
    }, [query, setLoading])

    return (
        <>
        <div>
            <Treemap 
            padding={40}
            margin={0}
            animation={true}
            data={{
                title: '',
                color: 1,
                style: {
                  backgroundColor: 'transparent',
                },
                children: data,
            }}
            mode="circlePack"
            height={750}
            width={750}
            getLabel={x => x.element}
            onLeafClick={n => {
              if (n.data.result)
                navigate({personID: n.data.result.PersonID, hash: '#person'})
              else if (n.data.query)
                navigate({q: n.data.query})
              else if (n.data.query !== undefined)
                setData(makeDefaultBubbles(defaultBubbles))
            }}
            />
        </div>
        </>
    );
})

const PersonShortName = React.memo(function ({...props}) {
  const [open, setOpen] = useState(false)
  const {FirstName, LastName, ratio} = props

  return (
    <PersonTooltip 
      title={<PersonCard {...props}/>} 
      placement='left' 
      arrow
      interactive
      enterNextDelay={200}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <div className='person-bubble'
        style={{
          display: 'flex',
          justifyItems: 'stretch',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        {ratio >= MIN_RATIO_FOR_IMAGE &&
        <div className='person-name'>
          <div>{FirstName} {LastName}</div>
        </div>}
      </div>
    </PersonTooltip>
  )
})

const PersonCard = React.memo(function({FirstName, LastName, Text, FactionName, KnessetNum, StartDate, Counter, query}) {

  return (
    <div style={{padding: '0 .5em', cursor: 'pointer'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', placeItems: 'center'}}>
        <h1>{FirstName} {LastName}</h1>
        <h2>{Counter} תוצאות</h2>
      </div>
      {(FactionName || KnessetNum) && 
        <h2>{FactionName && `${FactionName}, `}הכנסת ה-{KnessetNum}</h2>
      }
      <h3 style={{fontSize: '140%', letterSpacing: '.25px', wordSpacing: '.5px', fontWeight: 'normal', padding: '0 .25em', lineHeight: '130%'}}><i>
        ״<Highlighter 
          highlightStyle={{
            backgroundColor: '#f0c351'
          }}
          searchWords={query.split("^")}
          autoEscape={true}
          textToHighlight={Text} 
        />״
      </i></h3>
      <h3 style={{textAlign: 'left'}}><i>{toNiceDate(new Date(StartDate))}</i></h3>
    </div>
  )
})



const SuggestionBubble = React.memo(function ({query}) {
  return (
      <div className='suggestion'>
          <div style={{textAlign: 'center', width: '100%'}}>
            {query}
          </div>
      </div>
  )
})

const MoreSuggestionsBubble = React.memo(function () {
  return (
      <div className='suggestion'>
          <div style={{textAlign: 'center', width: '100%'}}>
            ...
          </div>
      </div>
  )
})
