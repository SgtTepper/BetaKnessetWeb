import React, { useCallback, useState, useEffect, useRef } from 'react'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useLocation, useHistory, useParams } from "react-router-dom"
import '../Main/index.css'
import './index.css'
import HakVotes from "./HakVotes";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js'
import particlesConfig from '../../particles.config.json'
import {makeStyles} from "@material-ui/core/styles";
import Loader from "../../components/VotesLoader";
import ChipsArray from "./ChipsArray";
import PlayCircleFilledTwoTone from "@material-ui/icons/PlayCircleFilledTwoTone";
import AlertDialogSlide from "./HakVotes/AlertDialogSlide";
import logo from './VotingLogo.png'

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

export default function VotesRegular() {
    console.log("Regular")

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
            return <HakVotes subjects={options.filter(e => e.isChosen ==1)} setStarted={setStarted} allRules={rules} ></HakVotes>
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
                zIndex: '1'
            }}>
                <>
                    <h1 style={{marginBottom:'-160px',  marginTop:'-130px'}}> <img style={{background: 'rgba(255,255,255, 0.9)' , height:'400px', width:'400px'}} src={logo} /></h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        minWidth: '100vw',
                        opacity: "1",
                        padding: '0em 0.8em',
                        position: 'relative',
                        textAlign: 'center',
                        marginBottom:'0px',
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
                                <AlertTitle style={{textAlign: 'right', fontSize: '20px'}}> </AlertTitle>
                                <p1 style={{letterSpacing: '0.03em', textAlign: 'right', fontSize: '17px'}}>
                                    סימולצית ההצבעות נועדה לעזור לכם לקבל החלטה במי לבחור בבחירות הקרובות.
                                    <br/>
                                    הסימולציה מאפשרת לכם להבין אילו חברי כנסת <strong> באמת </strong> משקפים את
                                    עמדותיכם.
                                    <br/>
                                    <br/>
                                    במהלך הסימולציה יוצגו בפניכם הצעות חוק שהועלו במליאה בשנים האחרונות ובכל
                                    <br/>
                                    שלב תוכלו לבחור איך אתם הייתם מצביעים - האם אתם <span style={{color:'green'}}>בעד</span> או <span style={{color:'red'}}>נגד</span> הצעת החוק.
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
                        <p style={{float: 'right', marginBottom:'0em', marginTop:'5px'}}> מה מעניין אתכם </p>
                        <div style={{float: 'left', marginBottom:'2px'}}>
                            <AlertDialogSlide startScreen={true} allRules={rules}/>
                        </div>
                    </div>
                    <ChipsArray  style={{marginBottom:'1px'}} options={options} setOptions={setOptions}/>
                </>
                <br/>
                <div style={{marginTop:'-18px'}}>
                    <MyButton style={{marginTop:'1px'}} startIcon={<PlayCircleFilledTwoTone
                        style={{marginTop:'1px',marginLeft: '11px', color: 'rgb(11,19,40)', fontSize: 60, textAlign: 'center'}}/>}
                              onClick={start_questions}/>
                </div>
                <p style={{fontSize:'12px', maxWidth: '55vw'}}>
                    * הצעות החוק ונתוני ההצבעות נלקחו מהאתר הרשמי של הכנסת. עם זאת, יתכנו אי דיוקים. למען הסר ספק, נתוני ההצבעות במאגרי הכנסת הם המדוייקים ביותר. הנהלת האתר אינה נושאת באחריות על טעויות כאלו שיתכנו. השימוש באתר ושיתוף המידע בו הינו באחריות המשתמש בלבד.
                     בחירת החוקים נעשתה באופן סובייקטיבי במידה. מוזמנים לקרוא על התהליך ע"י לחיצה על "?" למעלה. </p>
            </div>
        )
}
