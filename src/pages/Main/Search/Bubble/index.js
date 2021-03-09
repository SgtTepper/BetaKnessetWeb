import React, { useMemo, useState, useEffect } from 'react'
import "react-vis/dist/style.css"
import Highlighter from "react-highlight-words"
import {Treemap} from 'react-vis'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Link from '@material-ui/core/Link'
import Snackbar from '@material-ui/core/Snackbar'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import PersonIcon from '@material-ui/icons/Person'
import Button from '@material-ui/core/Button'

import QuotesLoader from '../../../../components/QuotesLoader'
import { useCancellableFetch, useBigScreen, useQuery, useWindowSize, toNiceDate, imageOrDefault, shuffleArray, useNavigate } from '../../../../utils'
import config from '../../../../config'

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {SearchDialog} from '../../../../components/QuotesSearch'

import defaultBubbles from '../../../../defaultTopics'
import { Typography } from '@material-ui/core'

const minSize = 50
const maxWidth = 750
const maxHeightRatio = .75
const minRatioForImage = .035
const minRatioForImageSmallScreen = Infinity
const maxBubblesForSmallScreen = 25


const useStyles = makeStyles({
  drawerPaper: {
    maxHeight: '65vh',
  },
  personCardFlex: {
    maxHeight: '65vh',
    display: 'flex',
    flexDirection: 'column',
  },
})

const makeDefaultBubbles = (queries, isBigScreen) => {
  shuffleArray(queries)
  const queriesCopy = queries.slice(0, isBigScreen ? config.defaultBubblesCount : config.defaultBubblesCountMobile)
  const sizes = new Array(queriesCopy.length)
    .fill(null)
    .map(_ => 5 + Math.random() * 10)
  const max = Math.max(...sizes)

  const res = queriesCopy.map((s, i) => makeDefaultBubble(s, sizes[i], max, isBigScreen))
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
const makeDefaultBubble = (s, size, max, isBigScreen) => {
  const lightness = (.4 + Math.random() * .5)
  return {
    element: <SuggestionBubble key={s} query={s} />,
    query: s,
    size: size,
    color: size,
    style: {
      color: lightness > .65 ? "#333" : "white",
      fontSize: `${(.65 + size / max) * 100 * (isBigScreen ? 1 : .7)}%`,
      animation: `pulse ${4 + Math.random() * 10}s ease-in-out infinite`,
      animationDelay: `-${Math.random() * 10}s`,
      animationDirection: 'alternate',
      backgroundColor: `hsl(${Math.round(230 + Math.random() * 5)}, ${(.25 + Math.random() * .4) * 100}%, ${lightness * 100}%)`,
    }
  }
}

const PersonTooltip = withStyles((theme) => ({
    tooltip: {
      boxShadow: theme.shadows[1],
    },
  }))(Tooltip);

const Bubble = React.memo(function ({viewPersonQuotes}) {
    const [loading, setLoading] = useState(false)
    const query = useQuery()

    return (
        <>
            <QuotesLoader show={loading} />
            <Chart query={query} setLoading={setLoading} viewPersonQuotes={viewPersonQuotes} />
        </>
    )
})
export default Bubble

const Chart = React.memo(function ({query, setLoading}) {
    const windowSize = useWindowSize()
    const isBigScreen = useBigScreen()
    const defaults = useMemo(() => makeDefaultBubbles(defaultBubbles, isBigScreen), [isBigScreen])
    const [personPreview, setPersonPreview] = useState(null)
    const [data, setData] = useState(defaults)
    const [error, setError] = useState(null)
    const [guideOpen, setGuideOpen ] = useState(false)
    const navigate = useNavigate()
    const serverFetch = useCancellableFetch()

    const cleanQuery = query.replace('״', '"')

    useEffect(() => {
        (async () => {
        if (!cleanQuery.length) {
          setData(defaults)
          return
        }
        setLoading(true)
        setError(null)
        try {
            let res = await serverFetch(`${config.server}/Keywords?keyword=${cleanQuery}`)
            if (!res.length) {
              setError(<div>אין תוצאות :(&nbsp;&nbsp; נסו ללחוץ על אחת הבועות?</div>)
              setData(defaults)
              return
            }
            
            const minRatio = isBigScreen ? minRatioForImage : minRatioForImageSmallScreen
            const total = res
              .map(r => r.Counter)
              .reduce((a, b) => a + b, 0)

            const filteredRes = res
              .filter(r => r.Counter / total >= minRatio || r.mk_imgPath !== null)
              .slice(0, isBigScreen ? undefined : maxBubblesForSmallScreen)

            setData(filteredRes
              .map(r => ({
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
            console.error(e)
            setError("סורי, לא הצלחנו להביא תוצאות. שווה לנסות שוב")
            setData(defaults)
        } finally {
            setLoading(false)
        }
        })()
    }, [cleanQuery, setLoading, defaults, isBigScreen, serverFetch])

    return (
        <>
          <SearchDialog open={guideOpen} setOpen={setGuideOpen} />
          <Snackbar 
            message={error}
            open={!!error} 
            style={{zIndex: 25}}
          />
          <div style={{zIndex: 2, display: 'flex', placeContent: 'center'}}>
            <Treemap 
            padding={isBigScreen ? 40 : 15}
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
            height={getDimensions(windowSize)}
            width={getDimensions(windowSize)}
            getLabel={x => x.element}
            onLeafClick={n => {
              if (n.data.result) {
                if (isBigScreen)
                  navigate({personID: n.data.result.PersonID, hash: '#person'})
                else
                  setPersonPreview(n.data.result)
              }
              else if (n.data.query)
                navigate({q: n.data.query})
              else if (n.data.query !== undefined) {
                setData(makeDefaultBubbles(defaultBubbles))    
                setGuideOpen(true)                          
              }
            }}
            />
        </div>
        {!isBigScreen && 
          <PersonPreview 
            details={personPreview} 
            query={cleanQuery}
            onClose={() => setPersonPreview(null)} 
          />
        }
        </>
    );
})

const PersonPreview = React.memo(function ({onClose, details, query}) {
  const classes = useStyles()
  return (
    <Drawer 
        anchor="bottom"
        open={!!details}
        onClose={onClose}
        classes={{paper: classes.drawerPaper}}
    >
        <MobilePersonCard {...details} query={query} onClose={onClose} />
    </Drawer>
  )
})

const PersonShortName = React.memo(function ({...props}) {
  const {FirstName, LastName, ratio} = props
  const windowSize = useWindowSize()
  const isBigScreen = windowSize.width >= maxWidth
  const minRatio = isBigScreen ? minRatioForImage : minRatioForImageSmallScreen

  return (
    <PersonTooltip 
      title={<PersonCard {...props}/>} 
      placement='left' 
      arrow
      interactive
      enterNextDelay={200}
    >
      <div className='person-bubble'
        style={{
          display: 'flex',
          justifyItems: 'stretch',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        {ratio >= minRatio &&
        <div className='person-name'>
          <div>{FirstName} {LastName}</div>
        </div>}
      </div>
    </PersonTooltip>
  )
})

const MobilePersonCard = React.memo(function({PersonID, FirstName, LastName, Text, FactionName, KnessetNum, 
  StartDate, Counter, mk_imgPath, query, onClose}) {
  const classes = useStyles()
  const navigate = useNavigate()
  const gotoPerson = () => { 
    navigate({personID: PersonID, hash: '#person'})
    onClose()
  }

  return (
    <Container className={classes.personCardFlex}>
      <CardContent>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', placeItems: 'center', width: '100%'}}>
          <div 
            style={{paddingLeft: '.5em', cursor: 'pointer'}} 
            onClick={gotoPerson}
          >
            <div style={{
                width: 50, height: 50, borderRadius: '100%',
                background: `url(${imageOrDefault(mk_imgPath, `${FirstName} ${LastName}`, 64)}) center center / cover no-repeat`,
            }} />
          </div>
          <div style={{flex: 1}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', placeItems: 'center'}}>
              <Link component="button" variant="h6" onClick={gotoPerson}>
                {FirstName} {LastName}
              </Link>
              <Typography className={classes.title} color="textSecondary">
                {Counter} תוצאות
              </Typography>
            </div>
            {(FactionName || KnessetNum) && 
              <Typography className={classes.pos} color="textSecondary">
                {FactionName && `${FactionName}, `}הכנסת ה-{KnessetNum}
              </Typography>
            }
          </div>
        </div>
      </CardContent>
      <CardContent style={{overflowY: 'auto'}}>
        <Typography variant="body2" component="div"><i>
          ״<Highlighter 
            highlightStyle={{
              backgroundColor: '#f0c351'
            }}
            searchWords={query.split("^")}
            autoEscape={true}
            textToHighlight={Text} 
          />״
          <div style={{textAlign: 'left'}}>
            {StartDate && toNiceDate(new Date(StartDate))}
          </div>
        </i></Typography>
      </CardContent>
      <CardActions>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', placeItems: 'center', width: '100%'}}>
          <Button 
            size="small" 
            variant="contained" 
            color="primary"
            startIcon={<PersonIcon style={{paddingLeft: '.5em', marginRight: '-.5em'}}/>}
            onClick={gotoPerson}
          >
           להקשר מלא ופרופיל ח"כ
          </Button>
        </div>
      </CardActions>
    </Container>
    )
})

const PersonCard = React.memo(function({FirstName, LastName, Text, FactionName, KnessetNum, StartDate, Counter, query}) {
  return (
    <div style={{padding: '0 .5em', cursor: 'pointer'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', placeItems: 'center'}}>
        <Typography variant="h5">{FirstName} {LastName}</Typography>
        <Typography 
          style={{
            fontWeight: 'bold',
            fontSize: '160%',
          }}
        >
          {Counter} תוצאות
        </Typography>
      </div>
      {(FactionName || KnessetNum) && 
        <Typography 
          style={{
            fontSize: "170%", 
            fontWeight: 'bold'
          }}
        >
          {FactionName && `${FactionName}, `}הכנסת ה-{KnessetNum}
        </Typography>
      }
      <Typography 
        style={{
          fontSize: '140%', 
          letterSpacing: '.25px', 
          wordSpacing: '.5px', 
          fontWeight: 'normal', 
          padding: '0 .25em', 
          lineHeight: '130%',
          fontStyle: 'italic',
        }}
      >
        ״<Highlighter 
          highlightStyle={{
            backgroundColor: '#f0c351'
          }}
          searchWords={query.split("^")}
          autoEscape={true}
          textToHighlight={Text} 
        />״
      </Typography>
      <Typography 
        style={{
          textAlign: 'left', 
          fontSize: '150%',
          fontStyle: 'italic',
        }}
      >
        {toNiceDate(new Date(StartDate))}
      </Typography>
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
            <HelpOutlineIcon style={{color: '#4c4c4c', paddingTop: '8px', fontSize: '1.7em'}}/>
          </div>
      </div>
  )
})

function getDimensions(windowSize) {
  const size = Math.min(maxWidth, windowSize.width)
  return Math.max(minSize, Math.min(size, windowSize.height * maxHeightRatio))
}