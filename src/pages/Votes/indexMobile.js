import React, { useCallback, useState, useEffect, useRef } from 'react'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useLocation, useHistory, useParams } from "react-router-dom"
import '../Main/index.css'
import './index.css'
import HakVotesMobile from "./HakVotesMobile";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Particles from 'react-particles-js'
import particlesConfig from '../../particles.config.json'
import {makeStyles} from "@material-ui/core/styles";
import Loader from "../../components/VotesMobileLoader";
import PlayCircleFilledTwoTone from "@material-ui/icons/PlayCircleFilledTwoTone";
import ChipsArrayMobile from "./ChipsArrayMobile";
import logo from './VotingLogo.png'
import AlertDialogSlide from "./HakVotesMobile/AlertDialogSlide";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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

export default function VotesMobile() {
    console.log("Mobile")
    const textRef = useRef()
    const personQuotesRef = useRef(null)

    const history = useHistory()
    const {personID} = useParams()
    const urlQuery = useQuery()
    const query = urlQuery.get("q") || ""
    const [queryInput, setQueryInput] = useState(query)
    const [loading, setLoading] = useState(true)
    const [options, setOptions] = useState([])
    const [subjects, setSubjects] = useState([]);
    const [started, setStarted] = useState(false)
    const classes = useStyles()
    const [rules, setRules] = useState([]);
    const onMobile=true

    const selectStyle = {
        control: () => ({
            display: "flex",
            alignItems: "center",
            border: 0,
            height: "auto",
            fontSize: '1.2em',
            background: "transparent",
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            listStyleType: 'circle',
            variant: 'outlined',
            width:'90vw'


        })}

    const styleButton = {
        root: {
            background: 'transparent',
            border: 0,
            borderRadius: 3,
            // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            color: 'white',
            minHeight: 50,
            minWeight: 50,
            padding: '0 0.5px',
            font: 'sans-serif',
            '&:hover': {
                boxShadow: '0 3px 5px 2px rgba(11, 19, 40, .3)'

            }



        },
    };

    function MyButtonRaw(props) {
        const { classes, color, ...other } = props;
        return <Button className={classes.root} {...other} />;
    }

    MyButtonRaw.propTypes = {
        /**
         * Override or extend the styles applied to the component.
         */
        classes: PropTypes.object.isRequired,
        color: PropTypes.oneOf(['blue', 'red']).isRequired,
    };

    const MyButton = withStyles(styleButton)(MyButtonRaw);

    const search = useCallback(() => {
    history.push(`/?q=${queryInput}`)
    }, [queryInput, history])


    useEffect(() => {
        async function fetchMyAPI() {
            setLoading(true)
            let response = await fetch('http://localhost:7071/api/Votes/Subjects')
            let ruleResponse = await fetch('http://localhost:7071/api/Votes/All')
            response = await response.json()
            setOptions(response.map(e => ({ label: e.subject, key: e.SubjectID, isChosen:1})))
            ruleResponse = await ruleResponse.json()
            setRules(ruleResponse)
            setSubjects(response)
            setLoading(false)
        }
        fetchMyAPI();
    }, [])

    function start_questions() {
        setStarted(true);
    }
    if (loading) {
        return <Loader show={loading}/>
    }

    if (started) {
        return <HakVotesMobile subjects={options.filter(e => e.isChosen ==1)} setStarted={setStarted} allRules={rules} ></HakVotesMobile>
    }

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                placeContent: 'center',
                placeItems: 'center',
                scrollSnapAlign: 'start',
                position: 'relative',
                minHeight: '60%',
                zIndex: '1',
            }}>
                {/*<AppBar position="sticky" classes={{root: classes.appbar}}>*/}
                {/*    <div className="appbar-grid-container">*/}
                {/*        <div className="nav">*/}
                {/*            <Button href="#top">*/}
                {/*                ראשי*/}
                {/*            </Button>*/}
                {/*            <Button href="#person">*/}
                {/*                ח"כים*/}
                {/*            </Button>*/}
                {/*            <Button href="#quotes">*/}
                {/*                ציטוטים*/}
                {/*            </Button>*/}
                {/*            <Button href="#calendar">*/}
                {/*                לו"ז*/}
                {/*            </Button>*/}
                {/*            <div className="spacer" />*/}
                {/*        </div>*/}
                {/*        <div className="logo">*/}
                {/*            <a href="#top">*/}
                {/*                <Typography color="primary" variant="h2" component="h1" className={classes.title}>*/}
                {/*                    <span className={classes.bigLetter}>ב</span>טא מחוקקי<span className={classes.bigLetter}>ם</span>*/}
                {/*                </Typography>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className="links">*/}
                {/*            <div className="spacer" />*/}
                {/*            <Button href="#contact">*/}
                {/*                צרו קשר*/}
                {/*            </Button>*/}
                {/*            <Button href="#about">*/}
                {/*                אודות*/}
                {/*            </Button>*/}
                {/*            <Tooltip title={<h2>מזלגו אותנו ב-GitHub</h2>} arrow>*/}
                {/*                <IconButton href="https://github.com/SgtTepper/BetaKnesset">*/}
                {/*                    <GitHubIcon />*/}
                {/*                </IconButton>*/}
                {/*            </Tooltip>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</AppBar>*/}
                <>
                    <h1 style={{letterSpacing: '0.03em', marginBottom:'-135px',  marginTop:'-100px'}}> <img style={{background: 'rgba(255,255,255, 0.9)' , height:'350px', width:'350px'}} src={logo} /></h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        minWidth: '100vw',
                        opacity: "1",
                        padding: '0em 0.8em',
                        position: 'relative',
                        textAlign: 'center',
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                        backgroundColor: 'rgba(11,19,40,0.95)'
                    }}>
                        <Alert style={{
                            maxWidth: '80vw',
                            padding: '.5em 0',
                            color: 'white',
                            backgroundColor: 'transparent'
                        }} icon={false}>
                            <div style={{textAlign: 'right'}}>
                                <AlertTitle style={{textAlign: 'right', fontSize: '15px'}}> </AlertTitle>
                                <p1 style={{letterSpacing: '0.03em', textAlign: 'right', fontSize: '14px'}}>
                                    סימולצית ההצבעות נועדה לעזור לכם לקבל החלטה במי לבחור בבחירות הקרובות.
                                    <br/>
                                    הסימולציה מאפשרת לכם להבין אילו חברי כנסת <strong> באמת </strong> משקפים את
                                    עמדותיכם.
                                    <br/>
                                    <br/>
                                    במהלך הסימולציה יוצגו בפניכם הצעות חוק שהועלו במליאה בשנים האחרונות ובכל
                                    <br/>
                                    שלב תוכלו לבחור איך אתם הייתם מצביעים - האם אתם בעד או נגד הצעת החוק.
                                    <br/>
                                    הסימולציה מחשבת בזמן אמת ובהסתמך על כלל ההצבעות שלכם בסימולציה מי
                                    <br/>
                                    הח"כים שדעתם הכי קרובה לעמדכם ומי אלו שדעתם השונה ביותר.
                                    <br/>
                                    <br/>
                                    ישנה אפשרות להסתכל גם בראי ח"כים שרצים בבחירות הקרובות (הכנסת ה-24)
                                    <br/>
                                    וגם בהתאם להצבעת המפלגות בעבר.
                                </p1>
                                <br/>
                            </div>
                        </Alert>
                    </div>
                </>
                <>
                    <div>
                        <p style={{float: 'right', fontSize: '20px',  marginBottom:'0em'}}> מה מעניין אתכם </p>
                        <div style={{float: 'left'}}>
                            <AlertDialogSlide startScreen={true} allRules={rules}/>
                        </div>
                    </div>
                    <ChipsArrayMobile style={{width:'90vw'}} options={options} setOptions={setOptions} />
                </>
                <br/>
                <div>
                    <MyButton startIcon={<PlayCircleFilledTwoTone
                        style={{marginBottom:'0.9em', marginLeft: '11px', color: 'rgb(11,19,40)', fontSize: 60, textAlign: 'center'}}/>}
                              onClick={start_questions}/>
                </div>
            </div>
        )

}
