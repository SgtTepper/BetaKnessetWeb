import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import HourglassFull from '@material-ui/icons/HourglassFull';
import "../index.css"
import {Tooltip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(199,197,221)',
        maxHeight: '15vh'
    },
    tab: {
        background: 'rgb(199,197,221)',
        color: 'black',
        maxHeight: '15vh'
    },

}));
export default function IconLabelTabs({value, setValue}) {

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Paper className={classes.root} style={{ maxWidth:'440px', padding: '0 0.5em'}} square={false} >
            <Tabs className={classes.tab} style={{ color:'white', placeContent: 'center'}}
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab   className={classes.tab} style={{fontFamily: "Helvetica Neue, sans-serif"}} label="מפלגות רצות"
                   icon={ value===0 ?
                       <DirectionsRun />
                       :<Tooltip placement="top" title="רוצה לשנות זווית ראיה?" style={{backgroundColor:'transparent', color:'black'}}><DirectionsRun /></Tooltip>}  />
                <Tab  className={classes.tab} style={{fontFamily: "Helvetica Neue, sans-serif"}}
                      icon={value===1 ?
                          <HourglassFull />
                          :
                          <Tooltip placement="top" title="רוצה לשנות זווית ראיה?" style={{backgroundColor:'transparent', color:'black'}}><HourglassFull /></Tooltip>} label="מפלגות בזמן ההצבעה" />
            </Tabs>
        </Paper>
    );
}