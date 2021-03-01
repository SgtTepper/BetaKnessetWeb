import React, { useState, useEffect } from 'react'

import PersonQuotes from './PersonQuotes'
import WordCloud from '../../../components/WordCloud'
import PersonBills from './PersonBills'
import PersonBillsStats from './PersonBillsStats'
import './index.css'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import PeopleIcon from '@material-ui/icons/People'

import config from '../../../config'
import { useNavigate, imageOrDefault, usePersonID, getFullName } from '../../../utils'
import { ScrollPage } from '../../../components/ScrollableView'
import PersonSearch from '../../../components/PersonSearch'

const PersonProfile = React.memo(function () {
  const personID = usePersonID()
  const [persons, setPersons] = useState({})

  useEffect(() => {
    (async () => {
      const res = await (await fetch(`${config.server}/PersonGetAll`)).json()
      const mapping = {}
      for (const p of res) {
        mapping[parseInt(p.PersonID)] = p
      }
      setPersons(mapping)
    })()
  }, [])

  return (
      <ScrollPage parentStyle={{backgroundColor: '#091022'}} limit id='person'>
        {personID 
          && <PersonView persons={persons} personID={personID} />}
        {!personID 
          && <PersonSelectionView persons={persons} />}
      </ScrollPage>
  )
})
export default PersonProfile


const PersonView = React.memo(function ({persons, personID}) { 
  const [person, setPerson] = useState(null)
  const [billsFilter, setBillsFilter] = useState(null)
    
  useEffect(() => {
      (async () => {
      setPerson(null)
      const res = await (await fetch(`${config.server}/PersonEnrichment?personID=${personID}`)).json()
      setPerson(parseResponse(res))
      })()
  }, [personID])

  return (
    <div className="person-grid-container" style={{width: '100%', position: 'relative', zIndex: 2}}>
      <div className="info">
        <div style={{padding: '0 1em 2em 1em', width: '100%'}}>
            <PersonSearch 
              style={{color: 'white', borderBottom: '2px solid white'}} 
              variant="standard"
              persons={persons}
            />
        </div>
        {person
            ? <SelectedPersonAvatar {...person} />
            : <CircularProgress />
        }
      </div>
      <div className="mini-content">
          <WordCloud />
      </div>
      <div className="mid-content">
          <div className="content-wrapper">
              <div className="content-rtl">
                  <PersonQuotes personID={personID} />
              </div>
          </div>
      </div>
      <div className="side-content-top">
        <PersonBillsStats personID={personID} filter={billsFilter} setFilter={setBillsFilter} />
      </div>
      <div className="side-content">
        <div className="content-wrapper">
          <div className="content-rtl">
            <PersonBills personID={personID} filter={billsFilter} />
          </div>
        </div>
      </div>
  </div>
  )
})

const PersonSelectionView = React.memo(function ({persons}) { 
  const navigate = useNavigate()

  const rands = []
  const ids = Object.keys(persons)
  while (rands.length < 5 && rands.length < ids.length) {
    const index = parseInt(Math.random() * ids.length)
    if (rands.indexOf(index) === -1)
      rands.push(ids[index])
  }

  return (
    <div style={{padding: '1em', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
        <PersonSearch 
          style={{color: 'white', borderBottom: '2px solid white'}} 
          variant="standard"
          persons={persons}
        />
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'space-between', placeContent: 'space-around', width: '100%', flexGrow: 1, flexBasis: 1}}>
          {rands.map(id => {
            const p = persons[id]
            const desc = []
            if (p.FactionName)
                desc.push(p.FactionName)
            if (p.KnessetNum)
                desc.push(`הכנסת ה-${p.KnessetNum}`)
            return (
              <Button key={id} onClick={() => navigate({personID: id, q: null})} >
                <PersonAvatar name={getFullName(p)} imgPath={p.imgPath} description={desc.join(', ')} />
              </Button>
            )
          })}
          <Button onClick={() => navigate({personID: null})}>
            <div style={{
              display: 'inline-flex',
              flexDirection: 'column',
              placeItems: 'center',
              padding: '0 1em',
            }}>
                <div className="person-avatar" style={{display: 'flex', placeItems: 'center', placeContent: 'center', background: '#ffffff1a'}}>
                  <PeopleIcon style={{fill: 'white', fontSize: '650%'}} />
                </div>
                <Typography color="secondary" variant="h4" component="h2"
                    style={{textAlign: 'center', color: 'white', fontFamily: "'Secular One', sans-serif"}}>
                    עוד
                </Typography>
                <Typography color="primary" variant="h5" component="h3"
                style={{textAlign: 'center', fontFamily: "'Secular One', sans-serif"}}>
                  ח״כים מהשנים האחרונות
            </Typography>
            </div>
          </Button>
        </div>
    </div>
  )
})


const SelectedPersonAvatar = React.memo(function ({Name, imgPath, positionsByKnesset}) {
  const lastPositions = positionsByKnesset[Math.max(...Object.keys(positionsByKnesset))]
  //const restPositions = Object.entries(positionsByKnesset)
  //        .filter(([k, _]) => k != lastPositions[0].KnessetNum)
  const faction = lastPositions.map(p => p.FactionName).filter(p => p)

  const desc = []
  if (faction.length)
      desc.push(faction[0])
  if (lastPositions.length && lastPositions[0].KnessetNum)
      desc.push(`הכנסת ה-${lastPositions[0].KnessetNum}`)

  return <PersonAvatar name={Name} imgPath={imgPath} description={desc.join(", ")} />
})
const PersonAvatar = React.memo(function ({name, imgPath, description}) {
    return (
        <div style={{
          display: 'inline-flex',
          flexDirection: 'column',
          placeItems: 'center',
          padding: '0 1em',
        }}>
            <div className="person-avatar" style={{
                background: `url(${imageOrDefault(imgPath, name, 128)}) center center / cover no-repeat`,
            }}>
            </div>
            <Typography color="secondary" variant="h4" component="h2"
                style={{textAlign: 'center', color: 'white', fontFamily: "'Secular One', sans-serif"}}>
                {name}
            </Typography>
            <Typography color="primary" variant="h5" component="h3"
                style={{textAlign: 'center', fontFamily: "'Secular One', sans-serif"}}>
                {description}
            </Typography>
        </div>
    )
})



function parseResponse(contents) {
    if (contents.length === 0)
      return null
  
    // take generic values
    const general = {}
    for (const property of [
      'FirstName',
      'LastName',
      'Email',
      'GenderDesc',
      'imgPath',
      'BirthCountry',
      'BirthDate',
      'CityName',
      'FamilyStatus',
      'ChildrenNumber'
    ]) {
      general[property] = contents[0][property]
    }
  
    general['Name'] = `${general.FirstName} ${general.LastName}`
  
    const positions = contents.map(p => {
      const ret = {}
      for (const property of [
        'PersonToPositionID',
        'DutyDesc',
        'GovMinistryName',
        'FactionName',
        'KnessetNum',
        'DutyDesc',
        'IsCurrent',
        'PositionStartDate',
        'PositionFinishDate'
      ]) {
        ret[property] = p[property]
      }
      return ret
    })
  
    return {
      ...general, 
      positions,
      positionsByKnesset: getPositionsByKnesset(positions)
    }
  }
  
  function getPositionsByKnesset(positions) {
    const res = {}
    for (const pos of positions) {
      if (!res[pos.KnessetNum])
        res[pos.KnessetNum] = []
      res[pos.KnessetNum].push(pos)
    }
    return res 
  }
  
  /*
  function getStrongestPosition(positions) {
    const dutyDescs = positions.map(p => p.DutyDesc).filter(p => p)
    if (dutyDescs.length > 0) return dutyDescs.join(', ')
  
    const govMinistry = positions.map(p => p.GovMinistryName).filter(p => p)
    if (govMinistry.length > 0) return `עובדת ב${govMinistry.join(', ')}`
  
    return positions[0].Description
  }
  
  function getTimeDeltaString(position) {
    if (!position.PositionStartDate)
      return null
  
    const startDate = new Date(position.PositionStartDate)
    if (!position.PositionFinishDate) {
      return `מ-${startDate.getDate()}/${startDate.getMonth() + 1}/${String(startDate.getFullYear() % 100).padStart(2, '0')}`
    }
  
    const finishDate = new Date(position.PositionFinishDate)
    return `${Math.round((finishDate.getTime() - startDate.getTime()) / (24*3600*1000))} ימים`
  }
  
  function combinePositions(positions) {
    const faction = positions.map(p => p.FactionName).filter(p => p)
    return <>
      {getStrongestPosition(positions)}
      {faction && `, ${faction}`}
    </>
  }*/
  