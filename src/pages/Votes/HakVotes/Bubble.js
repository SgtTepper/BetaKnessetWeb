import React, { useState } from 'react'

import "react-vis/dist/style.css"
import "../index.css"

import QuotesLoader from '../../../components/VotesLoader'
import PersonChart from './PersonChart'
import PartyChartFinal from "./PartyChartFinal"


const Bubble = React.memo(function ({queryString, partyPerson, minDifference, setMaxDifference, setWorstParty, setBestParty, setBestPartyImg, setWorstPartyImg}) {
    const [loading, setLoading] = useState(false)


    if (partyPerson === 0) {
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
