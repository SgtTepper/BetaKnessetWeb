import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import ThumbUp from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDown from "@material-ui/icons/ThumbDownAltOutlined";

import React, {useState} from "react";
import "../index.css"
import IconLabelTabs from "./IconLabelTabs";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import DiscreteSlider from "./Slider";
import { makeStyles } from '@material-ui/core/styles';
import VotesShareButtons from "./VotesShareButtons"
import Refresh from "@material-ui/icons/Refresh";
import VotesDialog from "./votesDialog";
import Particles from "react-particles-js";
import particlesConfig from "../../../particles.config.json";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: 'rgb(199,197,221)'
    },
    heading: {
        color:'black'
    },
    content: {
        background: 'transparent',
        color:'black',
        padding: '0em 1em',
        direction: 'ltr'
    },
}));

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
        width:'90vw',
        fontFamily: 'Helvetica Neue, Varela Round, sans-serif',


    })}

const styleButton = {
    root: {
        background: 'transparent',
        border: 0,
        // boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        minHeight: 50,
        minWeight: 50,
        padding: '0 0.5px',
        font: 'sans-serif',
        borderRadius: '8',
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



export default function Questions({rule, remove_random_rule, handle_against, handle_for, finished, back_to_subjects,
                                      keep_going, partyPerson, setPartyPerson, allRules, queryString, minDifference,
                                      setMinDifference, setStarted, maxDifference, rulesLength, bestParty, worstParty, worstPartyImg, bestPartyImg}) {


    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(true)
    const [firstTimeUsed, setFirstTimeUsed] = useState(true)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

      if (finished) {
        return (
            <div style={{ float:'right' ,textAlign:'center', zIndex:'6', backgroundColor: 'rgba(9,16,34, 0.95)', width:"20vw",minWidth:"350px", maxWidth:'450px', padding: '0em 2em', position: 'relative', minHeight: '100vh'}}>
                <h2 style={{ marginBottom: '-5px',fontSize: '30px'}}> הסתיים השאלון! </h2>
                <h2 style={{ marginBottom: '-5px',fontSize: '20px'}}>נראה שהמפלגה בשבילך היא  <span style={{color:'green',fontSize: '20px'}}>{bestParty} </span></h2>
                <h2 style={{ marginBottom: '-5px',fontSize: '20px'}}>
                    <span style={{color:'red',fontSize: '20px'}}>{worstParty} </span>
                    הכי פחות מסכימים איתך
                </h2>
                <br/>
                <VotesShareButtons/>
                <br/>
                <IconLabelTabs  value={partyPerson} setValue={setPartyPerson}/>
                <br/>
                {(partyPerson == 0 && queryString.split(',').length>1 )? (<DiscreteSlider setFirstTimeUsed={setFirstTimeUsed} firstTimeUsed={firstTimeUsed} queryString={queryString} style={{marginBottom: '0px'}} max={maxDifference} minDifference={minDifference} setMinDifference={setMinDifference}/>) :
                    ( <div style={{ marginBottom: '90px'}}/>)}
                <MyButton style={{ marginTop: '0px',borderRadius: '20' }} startIcon={<Refresh style={{ boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)', marginLeft: '11px', color: 'rgb(158,175,231)', fontSize:60, textAlign:'center'}}  />}
                          onClick={() => {setStarted(false)}} />
                <br/>
                <h2 style={{letterSpacing: '0.7px', textAlign: 'right', minHeight:'60px', fontSize:'15px', fontWeight:'normal', paddingRight:'15px'}}>
                    <span style={{color:'green'}}>ירוקים</span> - מסכים איתך
                    <br/>
                    <span style={{color:'red'}}>אדומים </span> - לא מסכים איתך
                    <br/>
                    <span style={{fontSize:'17px'}}>גדול</span> - קיצוני בהסכמה\חוסר הסכמה
                    <br/>
                    <span style={{fontSize: '13px'}}>קטן</span> - לפעמים מסכים איתך ולפעמים לא
                    <br/>
                    <span style={{fontSize: '13px'}}>
                    * בצד אחד של המסך המפלגות שברובן ירוקות ובצד השני אלו שברובן אדומות.
                </span>
                </h2>
            </div>
        )
    }

    return (
        <div style={{ float:'right' , zIndex:'6', backgroundColor: 'rgba(9,16,34, 0.95)', width:"20vw",minWidth:"350px", maxWidth:'450px', padding: '0em 2em', position: 'relative', minHeight: '100vh'}}>
            {(queryString != "" && queryString.split(',').length == 1 && openDialog) ?(
                        <VotesDialog open={openDialog} setOpen={setOpenDialog}/>
                )
                :
                <></>
            }
            <p style={{marginBottom: '-5px', color: 'white', fontFamily: 'Helvetica Neue, Varela Round, sans-serif', fontSize:'12px'}}>{queryString==''? 1 : (queryString.split(',').length+1)}/{Math.min(rulesLength,10)}</p>
            <h2 style={{marginBottom: '-5px', display: 'flex', justifyContent:'center', fontSize: "20px", flexDirection: 'column', letterSpacing: '0.7px', top:'50%', minHeight:'100px', boxShadow: '5px 5px 5px 5px rgba(40,150,169,0.2)'}}> {rule.LawName} </h2>
            <br/>
            <paper square={false}>
                <Accordion className={classes.root} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        justifyContent= 'flex-end'
                        style={{fontFamily: 'Helvetica Neue, Varela Round, sans-serif', textAlign: 'center', fontSize: "15px", paddingRight: '1.5vw'}}

                    >
                        <Typography className={classes.heading} style={{fontFamily: 'Helvetica Neue, Varela Round, sans-serif', textAlign: 'center', fontSize: "15px"}}>

                            מה הצעת החוק אומרת?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails  style={{textAlign: 'center'}}>
                        <Typography className={classes.content} style={{fontWeight: 'normal', fontFamily: 'Helvetica Neue, Varela Round, sans-serif', textAlign: 'center', fontSize: "15px", maxHeight:'20vh', overflow:'auto'}}>
                            {rule.KeySentence != undefined? <React.Fragment>
                                    <strong> משפט מפתח: </strong>
                                    {rule.KeySentence}
                                    <br/>
                                    <strong> דברי הסבר: </strong>
                                </React.Fragment>
                                :
                                <></>}
                            {rule.Description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </paper>
            <br/>
            <div style={{padding: '0em 0.8em' , position: 'relative', textAlign: 'center',  marginRight: '0px', marginLeft: '-4px', marginTop:'-5px', marginBottom:'-5px'}}>
            <Button
                variant="contained"
                startIcon={<ThumbUp style={{ fontSize:30, marginLeft: '8px'}}/>}
                style={{ padding: '0em 0.5em' , float:'right', backgroundColor: '#4caf50', color:'#eeeeee', minHeight: '40px', maxWidth: '45px' ,  margin: 8,boxShadow: '0 3px 3px 2px rgb(66, 126, 23)'}}
                onClick={handle_for}
            >
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<ThumbDown style={{ fontSize:30, marginLeft: '8px'}}/>}
                style={{backgroundColor: '#e64a19', color:'#eeeeee', minHeight: '40px', maxWidth: '45px ', padding: '0 0.5em', margin: 8,boxShadow: '0 3px 3px 2px rgb(140, 13, 43)'}}
                onClick={handle_against}
            >
            </Button>
            <Button
                variant="contained"
                style={{float:'left', fontFamily: 'Helvetica Neue, Varela Round, sans-serif', color:'black', minHeight: '40px', maxWidth: '45px ', padding: '0 0.5em', margin: 8,boxShadow: '0 2px 2px 2px rgb(222, 216, 217)'}}
                onClick={remove_random_rule}
            >
                לדלג
            </Button>
            </div>
            <br/>
            <IconLabelTabs  value={partyPerson} setValue={setPartyPerson}/>
            <br/>
            <br/>
            {(partyPerson == 0 && queryString.split(',').length>1) ? (<DiscreteSlider setFirstTimeUsed={setFirstTimeUsed} firstTimeUsed={firstTimeUsed} queryString={queryString} max={maxDifference} minDifference={minDifference} setMinDifference={setMinDifference}/>) :
                ( <></>)}

            <br/>
            <h2 style={{letterSpacing: '0.7px', textAlign: 'right', minHeight:'60px', fontSize:'15px', fontWeight:'normal', paddingRight:'15px'}}>
                <span style={{color:'green'}}>ירוקים</span> - מסכים איתך
                    <br/>
                <span style={{color:'red'}}>אדומים </span> - לא מסכים איתך
                    <br/>
                <span style={{fontSize:'17px'}}>גדול</span> - קיצוני בהסכמה\חוסר הסכמה
                <br/>
                <span style={{fontSize: '13px'}}>קטן</span> - לפעמים מסכים איתך ולפעמים לא
                <br/>
                <span style={{fontSize: '13px'}}>
                    * בצד אחד של המסך המפלגות שברובן ירוקות ובצד השני אלו שברובן אדומות.
                </span>
            </h2>
            <Particles
                params={particlesConfig}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                }}
            />

        </div>
    )
}