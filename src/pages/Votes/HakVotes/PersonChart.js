import React, { useState, useEffect } from 'react'

import "react-vis/dist/style.css"
import {Treemap} from 'react-vis'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import "../index.css"

import {sleep, imageOrDefault } from '../../../utils'
import config from '../../../config'



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        position: 'absolute',
        right: '25%'
    },
});



const PersonTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'rgba(24,24,53,0.8)',
        boxShadow: theme.shadows[1],
        minWidth: '20vw',
        maxWidth: '27vw',
        minHeight: '30vh',
        maxHeight: '50vh',
        overflow:'auto',


    },
}))(Tooltip);



const PersonChart = React.memo(function ({setLoading, queryString, minDifference, setMaxDifference, setWorstParty, setBestParty, setBestPartyImg, setWorstPartyImg}) {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            if (!queryString.length)
                return
            setLoading(true)
            try {
                // handle hebrew quotes (״)
                // handle hebrew quotes (״)
                const res = await (await fetch(`${config.server}/Votes/PersonVotes?votesHistory=${queryString}`)).json()
                const temp_data = res.map(r => ({
                    result: r,
                    element: <PersonShortName key={r.PersonID} name={r.Name} query={queryString} votes_agreed={r.votes_agreed}
                                              agreed_laws={r.agreed_laws} disagreed_laws={r.disagreed_laws} CurrentFaction={r.CurrentFaction}
                                              PlaceInList={r.PlaceInList}  votes_disagreed={r.votes_disagreed}
                                              absent_laws={r.absent_laws} votes_absent={r.votes_absent}/>,
                    size: Math.abs(r.votes_agreed-r.votes_disagreed-0.35*r.votes_absent),
                    color: r.votes_agreed-r.votes_disagreed-0.35*r.votes_absent,
                    faction: r.CurrentFaction,
                    faction_picture: r.faction_picture,
                    style: {
                        background: `url(${imageOrDefault(r.mk_imgPath, r.PersonID.toString(), 256)}) no-repeat center center`,
                        backgroundSize: 'cover',
                        color: '#ddd',
                        cursor: 'pointer',
                        border: (r.votes_agreed-r.votes_disagreed-0.35*r.votes_absent>0) ? `${Math.abs(r.votes_agreed-r.votes_disagreed-0.35*r.votes_absent)/1.15}px solid rgba(72,169,61,0.7)`: `${Math.abs(r.votes_agreed-r.votes_disagreed-0.35*r.votes_absent)/1.15}px solid rgba(223,36,36,0.7)`,
                        animation: `pulse ${4 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `-${Math.random() * 10}s`,
                        animationDirection: 'alternate',
                        // margin:'100px'
                    }
                }))
                setData(temp_data)
                const parties = temp_data.reduce((partiesSoFar, {result, faction, size, color, style, element,faction_picture}) => {
                    if (!partiesSoFar[faction]) partiesSoFar[faction] = [];
                    partiesSoFar[faction].push({
                        result: result,
                        element:element,
                        faction_picture:faction_picture,
                        size: size,
                        color: color,
                        title: faction,
                        style: style});

                    return partiesSoFar;
                }, {});
                const final_children_for_tree = []
                var counter = 0
                var max_difference = 0
                var worst_party = ''
                var worst_party_value = 0
                var best_party = ''
                var best_party_value = -100
                var best_party_img = ''
                var worst_party_img = ''
                for (const key in parties){
                    var color = 0
                    counter = 0
                    for (var faction of parties[key]){
                        // console.log(faction.result.Name)
                        // console.log(faction.color)
                        color = color + faction.color
                        counter ++
                        if (faction.size> max_difference){
                            max_difference = faction.size
                        }
                    }
                    var mean_score_for_best_party = (color-0.1* (10-faction.result.votes_agreed+faction.result.votes_absent+ faction.result.votes_absent)) / counter
                    var mean_score_for_worst_party = (color +0.1* (10-faction.result.votes_agreed+faction.result.votes_absent+ faction.result.votes_absent)) / counter
                    if (mean_score_for_best_party > best_party_value){
                        // console.log(mean_score_for_best_party)
                        // console.log(key)
                        best_party_value = mean_score_for_best_party
                        best_party = key
                        best_party_img=  parties[key][0].faction_picture
                    }
                    if (mean_score_for_worst_party < worst_party_value){
                        worst_party_value = mean_score_for_worst_party
                        worst_party = key
                        worst_party_img=parties[key][0].faction_picture
                    }

                    final_children_for_tree.push({
                        title: key,
                        children: parties[key].filter(r => r.size >= minDifference && r.mk_imgPath !== null),
                        style: {
                            opacity:0.4,
                            background: `url(${imageOrDefault(parties[key][0].faction_picture,'1', 256)}) no-repeat center center`,
                            backgroundSize: 'contain',
                            border: 'thin solid #ddd',
                            // margin: '40px'
                        },
                        color:color/counter,
                    })
                }
                setWorstParty(worst_party)
                setBestParty(best_party)
                setMaxDifference(max_difference);
                setData(final_children_for_tree)
                setWorstPartyImg(worst_party_img)
                setBestPartyImg(best_party_img)

            } catch(e) {
                // TODO handle errors
                console.error(e)
                setData([])
            } finally {
                await sleep();
                setLoading(false)
            }
        })()
    }, [queryString, setLoading, minDifference, setBestParty, setBestPartyImg, setMaxDifference, setWorstParty, setWorstPartyImg])
    const classes = useStyles();
    const a = data.filter(d => d.color <= 0);
    a.push({
        title: 'against',
        children: data.filter(d => d.color > 0),
        style: {backgroundColor: 'transparent',},

    })
    return (
        <>
            <div  style={{zIndex:'3', position: 'absolute', maxWidth:'100vw', maxHeight: '100vh', placeItems: 'center', float:'left', textAlign:'center'}} className={classes.root}>
                {/*<DiscreteSlider max={total} minDifference={minDifference} setMinDifference={setMinDifference} />*/}

                <div style={{position:"relative", left:'0px', top:'-11px', zIndex:'5'}}>
                            <Treemap
                        padding={2}
                        animation={true}
                        data={{
                            title: '',
                            color: 1,
                            style: {
                                backgroundColor: 'transparent',
                                titleColor: "black"
                            },
                            children: a
                        }}
                        mode="circlePack"
                        height={620}
                        width={1000}
                        getLabel={x => x.element}
                        // onLeafClick={n => n.data.result && viewPersonQuotes(n.data.result.PersonID)}
                    />
                </div>
            </div>
        </>
    );
})
export default PersonChart;

const PersonShortName = React.memo(function ({...props}) {
    const {votes_agreed, votes_disagreed, votes_absent } = props
    return (
        <PersonTooltip
            title={ <PersonCard {...props} />}
            placement='left'
            arrow
            interactive
            enterNextDelay={400}
            leaveDelay= {400}

        >
            <div
                className={(votes_agreed- votes_disagreed-0.35*votes_absent)>0? 'green-bubble':'red-bubble'}
                style={{
                    display: 'flex',
                    justifyItems: 'stretch',
                    alignItems: 'flex-end',
                    width: '100%',

                }}
            >
            </div>
        </PersonTooltip>
    )
})

const PersonCard = React.memo(function({name,agreed_laws, CurrentFaction, PlaceInList, disagreed_laws, absent_laws}) {

    return (
        <div style={{maxHeight: '100%'}}>
            <h1 style={{fontSize: '30px', color: '#eceff1'}}>{name}</h1>
            <h2 style={{fontSize: '18px', color: '#eceff1'}} >{CurrentFaction}</h2>
            <h2 style={{fontSize:'15px'}}> מקום {PlaceInList} ברשימה </h2>
            <div style={{background: 'linear-gradient(45deg, #c5cae9 30%, #e8eaf6 70%)'}}>

                <table style={{minWidth: '100%'}}>
                    <th style={{ background: 'linear-gradient(45deg,green 20%, #daded8 90%)', color: 'rgba(24,24,53,0.8)'}}> אנחנו מסכימים על ({agreed_laws === "" || agreed_laws=== null ? 0 : agreed_laws.split('#').length}):</th>
                    { agreed_laws === "" || agreed_laws === null ? <tr><td>אני ואתה לא באותו ראש                                         <span style={{fontSize: '20px'}} aria-label="sad" role="img"> 😕 </span>
                    </td></tr> :agreed_laws.split('#').map((item)=> <React.Fragment><tr><td>{item} </td></tr></React.Fragment>) }</table>

                <table style={{minWidth: '100%'}}>
                    <th style={{minWidth: '100%' , background: 'linear-gradient(45deg, red 20%, #cfb1b9 90%)', color: 'rgba(24,24,53,0.8)'}}>  אנחנו לא מסכימים על ({disagreed_laws === "" || disagreed_laws === null ? 0 : disagreed_laws.split('#').length}): </th>
                    {disagreed_laws === "" || disagreed_laws === null ? <tr><td>שתי טיפות מים אנחנו                                      <span style={{fontSize: '20px'}} aria-label="blush" role="img"> 😊 </span>
                    </td></tr> : disagreed_laws.split('#').map((item)=> <React.Fragment><tr><td>{item} </td></tr></React.Fragment>) }</table>

                <table style={{minWidth: '100%'}}>
                    <th style={{minWidth: '100%' , background: 'linear-gradient(45deg, orange 20%, #cfb1b9 90%)', color: 'rgba(24,24,53,0.8)'}}>   לא הצבעתי למרות שהייתי ח"כ ({absent_laws === "" || absent_laws === null ? 0 : absent_laws.split('#').length}): </th>
                    {absent_laws === "" || absent_laws === null ? <tr><td>חשוב לי להצביע ולהשפיע                                     <span style={{fontSize: '20px'}} aria-label="blush" role="img"> ✌️ </span>
                    </td></tr> : absent_laws.split('#').map((item)=> <React.Fragment><tr><td>{item} </td></tr></React.Fragment>) }</table>

            </div>
        </div>
    )
})