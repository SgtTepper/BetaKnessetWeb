import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import SliderHelp from "./SliderHelp";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import GroupAdd from "@material-ui/icons/GroupAdd";
import Person from "@material-ui/icons/Person";

const muiTheme = createMuiTheme({
    overrides:{
        MuiSlider: {
            thumb:{
                color: 'rgb(78,97,164)',
            },
            track: {
                color: 'linear-gradient(45deg, #8C6DD4 30%, #CED1ED 70%)',
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


export default function DiscreteSlider({max, minDifference, setMinDifference}) {
    const classes = useStyles();
    const [sliderWasChanged, setSliderWasChanged] = useState(false)

    if (max==0) {
        return (<></>)
    }
    console.log(`minDifference: ${minDifference}`)
    console.log(`log: ${Math.floor(Math.log2(max))}`)
    console.log(`slider changed: ${sliderWasChanged}`)
    if (!sliderWasChanged && minDifference != Math.floor(Math.log2(max))){
        setMinDifference( Math.floor(Math.log2(max)))
    }

    return (
            <div className={classes.root}>
                <ThemeProvider theme={muiTheme}>

                <Slider
                value={minDifference}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={max}
                onChangeCommitted={(event, newValue) => {setMinDifference(newValue); setSliderWasChanged(true)}}
            />
                </ThemeProvider>
            <div style={{position:'relative'}}>
                <Person style={{color:'white',fontSize:'17px', textAlign:'left', alignContent:"left", justifyContent:"flex-end", left:"290px", position:'absolute'}}/>
                <GroupAdd style={{color:'white', fontSize:'20px', textAlign:'left', alignContent:"left", justifyContent:"flex-end", left:"-8px", position:'absolute'}} />
            </div>
            </div>
    );
}