import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import GroupAdd from "@material-ui/icons/GroupAdd";
import Person from "@material-ui/icons/Person";
import {Tooltip} from "@material-ui/core";

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



    useEffect(() => {
        if (wasUsed==false) {
            <div>asds </div>
        }

    }, wasUsed)


    if (max===0) {
        return (<></>)
    }

    if (queryString.split(',').length > prevRulesLength) {
        setPrevRulesLength(queryString.split(',').length);
        setMinDifference(Math.floor(Math.log2(max)));
    }

    return (
            <div className={classes.root}>
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