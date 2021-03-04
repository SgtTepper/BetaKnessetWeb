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
        setMinDifference(Math.floor(Math.log2(max)));
    }

    return (
            <div className={classes.root}>
                {(wasUsed && firstTimeUsed)?(<DisclaimerDialog open={disclaimerOpen} setOpen={setDisclaimerOpen} />, setFirstTimeUsed(false)):<></>   }

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
    return (
        <Dialog open={open} setOpen={setOpen} closeText={'אישור'}>
            <Typography color="primary" variant="h4" component="h4">
                גילוי נאות
            </Typography>
            <p>
                <b>לתשומת לב הגולשים</b>
            </p>
            <p>
                האתר מתבסס על  <a href="https://main.knesset.gov.il/Activity/Info/pages/databases.aspx" rel="noreferrer" target="_blank"><u>מאגרי המידע הפתוחים של הכנסת</u></a> וזאת בהתאם לתקנות המתירות פיתוח יישומים ומערכות על בסיס מידע זה.
            </p>
            <p>
                באתר זה מוצגים פריטים שהינם תוצאה של אלגוריתמים לעיבוד מידע אשר אינם חפים מטעויות, כך יתכן למשל שהתוכנה שלנו תבצע טעות בזיהוי דובר, בפירוש הטקסט שלו, או במדידת ערכים הקשורים בו.
            </p>
            <p>
                למען הסר ספק המידע האמין והמדויק ביותר הינו זה שמקורו במאגרי המידע של הכנסת ובמסמכי הפרוטוקולים שמפורסמים באתר הכנסת והם מקור האמת המכריע.
            </p>
            <p>
                הנהלת האתר אינה נושאת באחריות על טעויות כאלו שיתכנו, השימוש באתר ושיתוף המידע שבאתר הינו באחריות המשתמש בלבד.
            </p>
        </Dialog>
    )
}