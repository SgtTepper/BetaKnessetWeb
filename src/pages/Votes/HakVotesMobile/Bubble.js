import React, { useState, useEffect } from 'react'

import "react-vis/dist/style.css"
import Highlighter from "react-highlight-words"
import {Treemap} from 'react-vis'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import "../index.css"

import QuotesLoader from '../../../components/VotesMobileLoader'
import PersonChart from './PersonChart'
import PartyChart from "./PartyChart";
import PartyChartFinal from "./PartyChartFinal"


const Bubble = React.memo(function ({queryString, partyPerson, setWorstParty,
                                        setBestParty, setBestPartyImg, setWorstPartyImg}) {
    const [loading, setLoading] = useState(false)

    if (partyPerson == 0) {
        return (
                < >
                    <PersonChart setLoading={setLoading} queryString={queryString}
                                 setWorstParty={setWorstParty} setBestParty={setBestParty}  setBestPartyImg={setBestPartyImg} setWorstPartyImg={setWorstPartyImg}/>
                    <div style={{position:'absolute', right:'0vw', marginTop:'0vh', width:'100vw', height:'100vh'}}>
                        <QuotesLoader show={loading}/></div>
                </>


        )
    }
    else{
        return (
                <>
                    <PartyChartFinal setLoading={setLoading} queryString={queryString}/>
                    <div style={{position:'absolute', right:'0vw', marginTop:'0vh', width:'100vw', height:'100vh'}}>

                    <QuotesLoader show={loading}/></div>
                < />



        )
    }
});
export default Bubble
