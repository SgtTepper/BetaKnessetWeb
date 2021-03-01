import React, { useState, useEffect } from 'react'

import "react-vis/dist/style.css"
import Highlighter from "react-highlight-words"
import {Treemap} from 'react-vis'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import "../index.css"

import QuotesLoader from '../../../components/VotesLoader'
import PersonChart from './PersonChart'
import PartyChart from "./PartyChart";
import PartyChartFinal from "./PartyChartFinal"


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
        boxShadow: theme.shadows[1],
    },
}))(Tooltip);

const Bubble = React.memo(function ({queryString, partyPerson, minDifference, setMaxDifference, setWorstParty, setBestParty, setBestPartyImg, setWorstPartyImg}) {
    const [loading, setLoading] = useState(false)

    if (partyPerson == 0) {
        return (
                < >
                    <PersonChart setLoading={setLoading} queryString={queryString} minDifference={minDifference}
                                 setWorstParty={setWorstParty} setBestParty={setBestParty} setMaxDifference={setMaxDifference} setBestPartyImg={setBestPartyImg} setWorstPartyImg={setWorstPartyImg}/>
                    <QuotesLoader show={loading}/>
                </>


        )
    }
    else{
        return (
                <>
                    <PartyChartFinal setLoading={setLoading} queryString={queryString}/>
                    <QuotesLoader show={loading}/>
                < />



        )
    }
})
export default Bubble
