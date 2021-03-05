import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import GroupAdd from "@material-ui/icons/GroupAdd";
import Person from "@material-ui/icons/Person";
import {Tooltip} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const muiTheme = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: 'rgb(78,97,164)',
            },
            track: {
                color: 'rgba(78,97,164, 0.8)',
                boxShadow: '0 3px 5px 2px rgba(186, 229, 239, .1)',
                minHeight: '0.4vh'
            },
            rail: {
                color: 'rgba(230,243,241, 0.95)',
                minHeight: '0.4vh'
            }
        }
    }
});

const useStyles = makeStyles({
    root: {
        width: 300,
        minHeight:'15px',
        marginRight: "auto !important",
        marginLeft: "auto !important",
        trackColor: "yellow",
        selectionColor: "red"
    },
});


export default function DiscreteSlider({max, minDifference, setMinDifference, queryString}) {
    const classes = useStyles();
    const [prevRulesLength, setPrevRulesLength] = useState(-1)
    const [wasUsed, setWasUsed] = useState(false)
    const [firstTimeUsed, setFirstTimeUsed] = useState(true)
    const [disclaimerOpen, setDisclaimerOpen] = useState(true)



    if (max===0) {
        return (<></>)
    }

    if (queryString.split(',').length > prevRulesLength) {
        setPrevRulesLength(queryString.split(',').length);
        setMinDifference(Math.max(Math.floor(max)-2, 1));


    }
    console.log(`Math.floor(max)-2: ${Math.floor(max)-2}, firstTimeUsed: ${firstTimeUsed}`)
    return (
            <div className={classes.root}>
                {(wasUsed && firstTimeUsed)?(<DisclaimerDialog open={disclaimerOpen} setOpen={setDisclaimerOpen} />):<></>   }

                <ThemeProvider theme={muiTheme}>
                <Tooltip placement="top" title="רוצה לראות יותר\פחות ח''כים?" style={{backgroundColor:'transparent', color:'black'}}>
                <Slider
                value={minDifference}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="off"
                step={1}
                marks
                min={0}
                max={Math.floor(max)}
                onChangeCommitted={(event, newValue) => { setMinDifference(newValue); setWasUsed(true)}}
            />
                </Tooltip>
                </ThemeProvider>
            <div style={{position:'relative'}}>
                <Person style={{color:'white',fontSize:'17px', textAlign:'left', alignContent:"left", justifyContent:"flex-end", left:"290px", position:'absolute'}}/>
                <GroupAdd style={{color:'white', fontSize:'20px', textAlign:'left', alignContent:"left", justifyContent:"flex-end", left:"-8px", position:'absolute'}} />
            </div>
            </div>
    );
}



function DisclaimerDialog({open, setOpen}) {
    const handleClose= ()=>{
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleClose}  >
            <DialogTitle id="alert-dialog-title" style={{color: 'black', marginBottom:'-10px'}}>
                <h1 style={{fontSize:'20px', color: 'black'}}>
                    גילית את הסליידר!</h1> </DialogTitle>
            <DialogContentText style={{fontSize:'15px', fontFamily: "'Helvetica Neue', sans-serif", padding: '0em 0.5em'}}>
                הסליידר מאפשר לך לשחק עם כמות הבועות שאת\ה רואה במסך.
                <br/>
                 אם תבחר להזיז את הסליידר לימין יוצגו רק הח"כים הקיצוניים ביותר בדעתם ביחס אלייך -
                <br/>
                אלו שמסכימים או לא מסכימים איתך באופן קיצוני.
                <br/>
            </DialogContentText>
            <DialogActions>
            <Button style= {{backgroundColor:'blue', color:'white'}} onClick={handleClose}> הבנתי</Button>
            </DialogActions>
        </Dialog>
    )
}