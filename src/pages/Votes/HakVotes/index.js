import React, { useState, useEffect } from 'react'

import "../index.css"

import '../index.css'
import Bubble from "./Bubble";
import Questions from "./Questions";
import Loader from "../../../components/VotesLoader";
import {makeStyles} from "@material-ui/core/styles";
import config from "../../../config.json";

const useStyles = makeStyles({
    title: {
        whiteSpace: 'nowrap',
        fontSize: '2em',
        color: 'white',
        letterSpacing: '-2px',
        fontFamily: 'Helvetica Neue, sans-serif',
        transition: 'all .2s ease-in',
        transform: 'scale(1)',
        '& $bigLetter': {
            fontSize: '120%',
        },
        '&:hover': {
            transform: 'scale(1.03)',
        },
    },
    bigLetter: {},
    appbar: {
        zIndex: 50,
    },
});

const MAX_RULES = 9


export default function HakVotes({subjects, setStarted, allRules}) {
    // const [subjects, setSubjects] = useState([{subject: "בטחון", subjectID: "8"},
    //     {subject: "כללי", subjectID: "1"},
    //     {subject: "כללי", subjectID: "2"},
    //     {subject: "כללי", subjectID: "4"},
    //     {subject: "כללי", subjectID: "5"}]);
    const [rules, setRules] = useState([]);
    const [loading, setLoading] = useState(true)
    const [curr_rule, setCurrRule] = useState();
    const [queryString, setQueryString] = useState("")
    const [finished, setFinished] = useState(false)
    const [lawsCounter, setLawsCounter] = useState(0)
    const [partyPerson, setPartyPerson] = useState(0)
    const [minDifference, setMinDifference] = useState(0);
    const [maxDifference, setMaxDifference] = useState(0);
    const [numOfRules, setNumOfRules] = useState(0)
    const [bestParty, setBestParty] = useState(0)
    const [worstParty, setWorstParty] = useState(0)
    const [bestPartyImg, setBestPartyImg] = useState(0)
    const [worstPartyImg, setWorstPartyImg] = useState(0)

    console.log("HakVotes")
    console.log(subjects);
    useEffect(() => {
        async function fetchMyAPI() {
            setLoading(true)
            let response = await fetch(`${config.server}/Votes/bySubjects?subjectIDs=`+ subjects.map(e => (e.key)).join(','))
            response = await response.json()
            setCurrRule(response.splice(Math.floor(Math.random()*response.length), 1));
            setRules(response);
            setLoading(false);
            setNumOfRules(response.length+1)
        }
        fetchMyAPI();
    }, [])

    function back_to_subjects(){
        setStarted(false)
    }

    function keep_going(){
        setFinished(false)
        setLawsCounter(0)
    }

    function remove_random_rule() {

        if (rules.length > 0){
            let a = rules.splice(Math.floor(Math.random()*rules.length), 1);

            setCurrRule(a);

        }
        else{
            setFinished(true);
        }
    }


    function handle_for() {

        if (queryString == ""){
            setQueryString(curr_rule[0].ID + "b");
        }
        else{
            setQueryString(queryString +","+curr_rule[0].ID + "b");
        }
        setLawsCounter(lawsCounter +1)
        if (lawsCounter == MAX_RULES) {
            setFinished(true)
        }
        remove_random_rule();
    }

    function handle_against() {
        if (queryString == ""){
            setQueryString(curr_rule[0].ID + "n");
        }
        else{
            setQueryString(queryString +","+curr_rule[0].ID + "n");
        }
        setLawsCounter(lawsCounter +1)
        if (lawsCounter == MAX_RULES) {
            setFinished(true)
        }

        remove_random_rule();
    }

    if (loading) {
        return <Loader show={loading}/>
    }
    else {
        return (
        <div className='float-container' style={{
                placeContent: 'center',
                scrollSnapAlign: 'start',
                position: 'relative',
                minHeight: '100vh',
                zIndex: '1',

            }}>
                < >
                    <Questions rule={curr_rule[0]} handle_against={handle_against} handle_for={handle_for} allRules={allRules}
                               remove_random_rule={remove_random_rule} finished={finished}
                               back_to_subjects={back_to_subjects} keep_going={keep_going} partyPerson={partyPerson}
                               setPartyPerson={setPartyPerson} queryString={queryString}
                               minDifference={minDifference} setMinDifference={setMinDifference}
                               setStarted={setStarted} maxDifference={maxDifference} rulesLength={numOfRules}
                            bestParty={bestParty} worstParty={worstParty} bestPartyImg={bestPartyImg} worstPartyImg={worstPartyImg}/>

                    <Bubble minDifference={minDifference} queryString={queryString} partyPerson={partyPerson}
                            setMaxDifference={setMaxDifference} setBestParty={setBestParty} setWorstParty={setWorstParty} setBestPartyImg={setBestPartyImg} setWorstPartyImg={setWorstPartyImg}/>

                </>
            </div>
        )
    }
}



