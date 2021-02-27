import React, { useEffect, useState } from 'react'
import './index.rtl.css'


function parseResponse(contents) {
  if (contents.length == 0)
    return null

  // take generic values
  const general = {}
  for (const property of [
    'FirstName',
    'LastName',
    'Email',
    'GenderDesc',
    'Mk_imgPath',
    'Mk_BirthCountry',
    'Mk_BirthDate',
    'Mk_YearDate',
    'Mk_YearDeathDate',
    'Mk_CityName',
    'Mk_FamilyStatus',
    'Mk_ChildrenNumber'
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
      'PositionDescription',
      'PositionIsCurrent',
      'StartDate',
      'FinishDate'
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

function getStrongestPosition(positions) {
  const dutyDescs = positions.map(p => p.DutyDesc).filter(p => p)
  if (dutyDescs.length > 0) return dutyDescs.join(', ')

  const govMinistry = positions.map(p => p.GovMinistryName).filter(p => p)
  if (govMinistry.length > 0) return `עובדת ב${govMinistry.join(', ')}`

  return positions[0].PositionDescription
}

function getTimeDeltaString(position) {
  if (!position.StartDate)
    return null

  const startDate = new Date(position.StartDate)
  if (!position.FinishDate) {
    return `מ-${startDate.getDate()}/${startDate.getMonth() + 1}/${String(startDate.getFullYear() % 100).padStart(2, '0')}`
  }

  const finishDate = new Date(position.FinishDate)
  return `${Math.round((finishDate.getTime() - startDate.getTime()) / (24*3600*1000))} ימים`
}

function combinePositions(positions) {
  const faction = positions.map(p => p.FactionName).filter(p => p)
  return <>
    {getStrongestPosition(positions)}
    {faction && ` מ${faction}`}
  </>
}

const smartassSentences = [
  g => <>(לא {g ? 'מבטיח' : 'מבטיחה'} כלום...)</>,
  g => <>(מה יש לך להפסיד?)</>,
  g => <>(אם לא מנסים לא יודעים!)</>,
  g => <>(מקווה שלא יגיע לספאם)</>,
  g => <>(מגניב שבכלל יש לי אימייל, לא?)</>,
  g => <>✉️✉️✉️✉️</>,
]

function getRandomSmartassSentence(profile) {
  const rand = profile.positions[0].PersonToPositionID % smartassSentences.length
  return smartassSentences[rand](profile.GenderDesc === 'זכר')
}

export default function Profile() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const id = new URLSearchParams(window.location.search).get('id')
      if (!id) {
        console.log(`Invalid request`)
        // TODO handle (render something to user)
        return
      }
      const res = await fetch(`https://betaknesset.azurewebsites.net/api/Person/${id}`)
      if (res.status !== 200) {
        console.log(`Server returned error ${res.status}`)
        // TODO handle (render something to user)
        return
      }
      const contents = await res.json()
      setProfile(parseResponse(contents))
    }
    fetchData()
  }, [])

	return (
        <div className="main-container">
            <header className="block">
                <div className="profile-menu">
                    <div className="profile-picture small-profile-picture">
                        <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg" />
                    </div>
                    <p>גילה גמליאל <a href="#26"><span className="entypo-down-open scnd-font-color"></span></a></p>
                </div>
                <ul className="header-menu horizontal-list">
                    <li>
                        <a className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Settings</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#2"><span className="icon fontawesome-user scnd-font-color"></span>Account</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
                        <a className="header-menu-number" href="#4">5</a>
                    </li>
                    <li>
                        <a className="header-menu-tab" href="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favorites</a>
                    </li>
                </ul>
            </header>

            <div className="left-container container">
                <div className="menu-box block"> 
                    <h2 className="titular">MENU BOX</h2>
                    <ul className="menu-box-menu">
                        <li>
                            <a className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></a>                            
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                        </li>
                        <li>
                            <a className="menu-box-tab" href="#13"><sapn className="icon entypo-chart-line scnd-font-color"></sapn>Statistics</a>
                        </li>                        
                    </ul>
                </div>
                <div className="donut-chart-block block"> 
                    <h2 className="titular">OS AUDIENCE STATS</h2>
                    <div className="donut-chart">
                        <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
                        <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
                        <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
                        <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>
                        <p className="center-date">JUNE<br /><span className="scnd-font-color">2013</span></p> 
                    </div>
                    <ul className="os-percentages horizontal-list">
                        <li>
                            <p className="ios os scnd-font-color">iOS</p>
                            <p className="os-percentage">21<sup>%</sup></p>
                        </li>
                        <li>
                            <p className="mac os scnd-font-color">Mac</p>
                            <p className="os-percentage">48<sup>%</sup></p>
                        </li>
                        <li>
                            <p className="linux os scnd-font-color">Linux</p>
                            <p className="os-percentage">9<sup>%</sup></p>
                        </li>
                        <li>
                            <p className="win os scnd-font-color">Win</p>
                            <p className="os-percentage">32<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
                <div className="line-chart-block block clear"> 
                    <div className="line-chart">
                        <div className='grafico'>
                           <ul className='eje-y'>
                             <li data-ejey='30'></li>
                             <li data-ejey='20'></li>
                             <li data-ejey='10'></li>
                             <li data-ejey='0'></li>
                           </ul>
                           <ul className='eje-x'>
                             <li>Apr</li>
                             <li>May</li>
                             <li>Jun</li>
                           </ul>
                             <span data-valor='25'>
                               <span data-valor='8'>
                                 <span data-valor='13'>
                                   <span data-valor='5'>   
                                     <span data-valor='23'>   
                                     <span data-valor='12'>
                                         <span data-valor='15'>
                                         </span></span></span></span></span></span></span>
                        </div>
                    </div>
                    <ul className="time-lenght horizontal-list">
                        <li><a className="time-lenght-btn" href="#14">Week</a></li>
                        <li><a className="time-lenght-btn" href="#15">Month</a></li>
                        <li><a className="time-lenght-btn" href="#16">Year</a></li>
                    </ul>
                    <ul className="month-data clear">
                        <li>
                            <p>APR<span className="scnd-font-color"> 2013</span></p>
                            <p><span className="entypo-plus increment"> </span>21<sup>%</sup></p>
                        </li>
                        <li>
                            <p>MAY<span className="scnd-font-color"> 2013</span></p>
                            <p><span className="entypo-plus increment"> </span>48<sup>%</sup></p>
                        </li>
                        <li>
                            <p>JUN<span className="scnd-font-color"> 2013</span></p>
                            <p><span className="entypo-plus increment"> </span>35<sup>%</sup></p>
                        </li>
                    </ul>
                </div>
                <div className="media block"> 
                    <div id="media-display">
                        <a className="media-btn play" href="#23"><span className="fontawesome-play"></span></a>
                    </div>
                    <div className="media-control-bar">
                        <a className="media-btn play" href="#23"><span className="fontawesome-play scnd-font-color"></span></a>
                        <p className="time-passed">4:15 <span className="time-duration scnd-font-color">/ 9:23</span></p>
                        <a className="media-btn volume" href="#24"><span className="fontawesome-volume-up scnd-font-color"></span></a>
                        <a className="media-btn resize" href="#25"><span className="fontawesome-resize-full scnd-font-color"></span></a>
                    </div>
                </div>
                <ul className="social horizontal-list block"> 
                    <li className="facebook"><p className="icon"><span className="zocial-facebook"></span></p><p className="number">248k</p></li>
                    <li className="twitter"><p className="icon"><span className="zocial-twitter"></span></p><p className="number">30k</p></li>
                    <li className="googleplus"><p className="icon"><span className="zocial-googleplus"></span></p><p className="number">124k</p></li>
                    <li className="mailbox"><p className="icon"><span className="fontawesome-envelope"></span></p><p className="number">89k</p></li>
                </ul>
            </div>

            <div className="middle-container container">
                <ProfileCard profile={profile} />
                <ul className="social block"> 
                    <li><a href="#50"><div className="facebook icon"><span className="zocial-facebook"></span></div><h2 className="facebook titular">SHARE TO FACEBOOK</h2></a></li>
                    <li><a href="#51"><div className="twitter icon"><span className="zocial-twitter"></span></div><h2 className="twitter titular">SHARE TO TWITTER</h2></a></li>
                    <li><a href="#52"><div className="googleplus icon"><span className="zocial-googleplus"></span></div><h2 className="googleplus titular">SHARE TO GOOGLE+</h2></a></li>
                </ul>
            </div>

            <div className="right-container container">
              <PersonalInfo profile={profile} />
                <div className="loading block">
                    <div className="progress-bar downloading"></div>
                    <p><span className="icon fontawesome-cloud-download scnd-font-color"></span>Downloading...</p>
                    <p className="percentage">81<sup>%</sup></p>
                    <div className="progress-bar uploading"></div>
                    <p><span className="icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...</p>
                    <p className="percentage">43<sup>%</sup></p>
                </div>
                <div className="calendar-day block"> 
                    <div className="arrow-btn-container">
                        <a className="arrow-btn left" href="#200"><span className="icon fontawesome-angle-left"></span></a>
                        <h2 className="titular">WEDNESDAY</h2>
                        <a className="arrow-btn right" href="#201"><span className="icon fontawesome-angle-right"></span></a>
                    </div>
                        <p className="the-day">26</p>
                        <a className="add-event button" href="#27">ADD EVENT</a>
                </div>
                <div className="calendar-month block"> 
                    <div className="arrow-btn-container">
                        <a className="arrow-btn left" href="#202"><span className="icon fontawesome-angle-left"></span></a>
                        <h2 className="titular">APRIL 2013</h2>
                        <a className="arrow-btn right" href="#203"><span className="icon fontawesome-angle-right"></span></a>
                    </div>
                    <table className="calendar">
                        <thead className="days-week">
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>R</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><a className="scnd-font-color" href="#100">1</a></td>
                            </tr>
                            <tr>
                                <td><a className="scnd-font-color" href="#101">2</a></td>
                                <td><a className="scnd-font-color" href="#102">3</a></td>
                                <td><a className="scnd-font-color" href="#103">4</a></td>
                                <td><a className="scnd-font-color" href="#104">5</a></td>
                                <td><a className="scnd-font-color" href="#105">6</a></td>
                                <td><a className="scnd-font-color" href="#106">7</a></td>
                                <td><a className="scnd-font-color" href="#107">8</a></td>
                            </tr>
                            <tr>
                                <td><a className="scnd-font-color" href="#108">9</a></td>
                                <td><a className="scnd-font-color" href="#109">10</a></td>
                                <td><a className="scnd-font-color" href="#110">11</a></td>
                                <td><a className="scnd-font-color" href="#111">12</a></td>
                                <td><a className="scnd-font-color" href="#112">13</a></td>
                                <td><a className="scnd-font-color" href="#113">14</a></td>
                                <td><a className="scnd-font-color" href="#114">15</a></td>
                            </tr>
                            <tr>
                                <td><a className="scnd-font-color" href="#115">16</a></td>
                                <td><a className="scnd-font-color" href="#116">17</a></td>
                                <td><a className="scnd-font-color" href="#117">18</a></td>
                                <td><a className="scnd-font-color" href="#118">19</a></td>
                                <td><a className="scnd-font-color" href="#119">20</a></td>
                                <td><a className="scnd-font-color" href="#120">21</a></td>
                                <td><a className="scnd-font-color" href="#121">22</a></td>
                            </tr>
                            <tr>
                                <td><a className="scnd-font-color" href="#122">23</a></td>
                                <td><a className="scnd-font-color" href="#123">24</a></td>
                                <td><a className="scnd-font-color" href="#124">25</a></td>
                                <td><a className="today" href="#125">26</a></td>
                                <td><a href="#126">27</a></td>
                                <td><a href="#127">28</a></td>
                                <td><a href="#128">29</a></td>
                            </tr>
                            <tr>
                                <td><a href="#129">30</a></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div> 
        </div> 
	)
}

function ProfileCard({profile}) {
  if (!profile)
    return <div className="profile block"><div className="load">...</div></div>

  const positions = profile.positionsByKnesset
  const lastPositions = positions[Math.max(...Object.keys(positions))]
  const restPositions = Object.entries(positions)
          .filter(([k, v]) => k != lastPositions[0].KnessetNum)
  const faction = lastPositions.map(p => p.FactionName).filter(p => p)

  return (
    <>
      <div className="profile block"> 
        <div className="profile-picture big-profile-picture clear">
          {(profile.Mk_imgPath) && (
            <img width="150px" alt={profile.Name} src={profile.Mk_imgPath} />)}
        </div>
        <h1 className="user-name">{profile.Name}</h1>
        <div className="profile-description">
            <p className="scnd-font-color">{getStrongestPosition(lastPositions)} {faction && `מ${faction}`} בכנסת ה-{lastPositions[0].KnessetNum}</p>
        </div>
      </div>

      <div className="weather block clear"> 
        <h2 className="titular"><span className="icon entypo-bookmark"></span><strong>מה עשיתי בכנסת ה-{lastPositions[0].KnessetNum}?</strong></h2>
          <ul className="next-days">
            {lastPositions
              .sort((a,b) => (b.FinishDate - b.StartDate) - (a.FinishDate - a.StartDate))
              .map(p => 
              <li key={p.PersonToPositionID}>
                  <a href="#43">
                      <p className="next-days-date"><span className="day">{getStrongestPosition([p])}</span> </p>
                      <p className="next-days-temperature"><span className="scnd-font-color">{getTimeDeltaString(p)}</span></p>
                  </a>
              </li>
            )}
          </ul>
      </div>
      {restPositions.length > 0 
        &&
        <div className="tweets block"> 
          <h2 className="titular"><span className="icon entypo-bookmarks"></span>ויש עוד...</h2>
          {restPositions
            .sort((a,b) => b[0] - a[0])
            .map(([num, ps]) => 
              <div className="tweet" key={num}>
                  <p>{combinePositions(ps)}</p>
                  <p><a className="scnd-font-color" href="#20">הכנסת ה-{num}</a></p>
              </div>
          )}
        </div> 
      }
    </>
  )
}

function PersonalInfo({profile}) {
  if (!profile)
    return <div className="profile block"><div className="load">...</div></div>

  const firstPositions = profile.positionsByKnesset[Math.min(...Object.keys(profile.positionsByKnesset))]
  const startDate = new Date(firstPositions[0].StartDate)
  const faction = firstPositions.map(p => p.FactionName).filter(p => p)

  return (
    <div className="join-newsletter block">
        <h2 className="titular">קצת עלי</h2>
        <div className="input-container">
          <p>
            {profile.Mk_BirthDate &&
              <>
                {profile.GenderDesc === 'זכר' ? 'בן' : 'בת'}{' '}
                {Math.floor((new Date().getTime() - new Date(profile.Mk_BirthDate)) / (24*3600*1000*365))}
              </>}
            {profile.Mk_CityName && ` מ${profile.Mk_CityName}`}{', '}
            {profile.Mk_FamilyStatus 
                ? (profile.Mk_FamilyStatus 
                  + (profile.Mk_ChildrenNumber && ` פלוס ${profile.Mk_ChildrenNumber}`))
                : (profile.Mk_ChildrenNumber &&
                  (profile.Mk_ChildrenNumber === 1 
                    ? ' ילד אחד' 
                    : `${profile.Mk_ChildrenNumber} ילדים`)
            )}.
            אני בכנסת מאז {startDate.getMonth()}/{String(startDate.getFullYear() % 100).padStart(2, '0')}{' '}
            (הכנסת ה-{firstPositions[0].KnessetNum}), שם הייתי {getStrongestPosition(firstPositions)} {' '}
            {faction && `במפלגת ${faction}`}.
          </p>
          {profile.Email && 
            <p>
              יכולים לנסות לדבר איתי בכתובת <a href={`mailto:${profile.Email}`}>{profile.Email}</a>{' '}
            {getRandomSmartassSentence(profile)}
            </p>
          }
        </div>
        <a className="subscribe button" href="#21">עוד</a>
    </div>
  )
}
