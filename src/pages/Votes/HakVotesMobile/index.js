import React, { useState, useEffect } from 'react'


import Particles from 'react-particles-js'
import particlesConfig from '../../../particles.config.json'
import "../index.css"
import '../index.css'
import Bubble from "./Bubble";
import Questions from "./Questions";
import {useLocation} from "react-router-dom";
import Loader from "../../../components/VotesMobileLoader";
import {makeStyles} from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import config from '../../../config.json'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const useStyles = makeStyles({
    title: {
        whiteSpace: 'nowrap',
        fontSize: '2em',
        color: 'white',
        letterSpacing: '-2px',
        fontFamily: 'Helvetica Neue, Varela Round, sans-serif',
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
        width: '100vw',
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
    const [numOfRules, setNumOfRules] = useState(0)
    const [bestParty, setBestParty] = useState(0)
    const [worstParty, setWorstParty] = useState(0)
    const [bestPartyImg, setBestPartyImg] = useState(0)
    const [worstPartyImg, setWorstPartyImg] = useState(0)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


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
        return (
            <div className='float-container' style={{
                placeContent: 'center',
                scrollSnapAlign: 'start',
                position: 'relative',
                minHeight: '100vh',
                direction:'rtl',
                zIndex: '1',
            }}>
                    <Loader style={{width:'100vw'}}show={loading}/>

            </div>
        )

    }
    else {
        return (
            <div className='float-container' style={{
                placeContent: 'center',
                scrollSnapAlign: 'start',
                position: 'relative',
                minHeight: '100vh',
                direction:'rtl',
                zIndex: '1',

            }}>
                <AppBar position="static" color="default" dir='ltr'  >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        style={{fontFamily: 'Helvetica Neue, Varela Round, sans-serif'}}
                    >
                        <Tab label="הצעות חוק" />
                        <Tab label="ח''כים רצים"  />
                        <Tab label="מפלגות עבר" />
                    </Tabs>
                </AppBar>
                <SwipeableViews style={{direction: 'rtl'}}
                                index={value}
                                // axis={'x-reverse'}
                                onChangeIndex={handleChangeIndex}>

                    <div  style={{width:'100vw', display: 'flex',
                        flexDirection: 'column',
                        placeContent: 'center',
                        placeItems: 'center',
                        scrollSnapAlign: 'start',
                        minHeight: '60%', overflow:'hidden', direction: 'rtl'}}

                    >
                        <Questions style={{width: '95vw'}} rule={curr_rule[0]} handle_against={handle_against}
                                   handle_for={handle_for} allRules={allRules}
                                   remove_random_rule={remove_random_rule} finished={finished}
                                   back_to_subjects={back_to_subjects} keep_going={keep_going}
                                   partyPerson={partyPerson}
                                   setPartyPerson={setPartyPerson} queryString={queryString}

                                   setStarted={setStarted} rulesLength={numOfRules}
                                   bestParty={bestParty} worstParty={worstParty} bestPartyImg={bestPartyImg}
                                   worstPartyImg={worstPartyImg}/>

                    </div>
                    <div  style={{width:'100vw', overflow:'hidden'}}>
                        <Bubble  queryString={queryString} partyPerson={0}
                                  setBestParty={setBestParty}
                                 setWorstParty={setWorstParty} setBestPartyImg={setBestPartyImg}
                                 setWorstPartyImg={setWorstPartyImg}/>


                    </div>
                    <div  style={{width:'100vw', overflow:'hidden'}}>
                        <Bubble  queryString={queryString} partyPerson={1}
                                  setBestParty={setBestParty}
                                 setWorstParty={setWorstParty} setBestPartyImg={setBestPartyImg}
                                 setWorstPartyImg={setWorstPartyImg}/>

                    </div>
                </SwipeableViews>
            </div>
        )
    }
}



