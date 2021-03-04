import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import HourglassFull from '@material-ui/icons/HourglassFull';
import "../index.css"
import {Tooltip} from "@material-ui/core";
import DiscreteSlider from "./Slider";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(199,197,221)',
        textAlign:'center',
        maxHeight: '10vh'
    },
    tab: {
        background: 'rgb(199,197,221)',
        color: 'black',
        fontSize: '12px',
        maxHeight: '10vh'
    },

}));
export default function IconLabelTabs({value, setValue}) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Paper className={classes.root} style={{ width:'90vw', padding: '0 0.5em'}} square={false} >
            <Tabs className={classes.tab} style={{ color:'white', placeContent: 'center'}}
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
            >
                <Tab   className={classes.tab} style={{fontFamily: "Helvetica Neue, sans-serif"}} label="מפלגות רצות"
                   icon={ value==0 ?
                       <DirectionsRun style={{fontSize: '20px'}}/>
                       :<Tooltip placement="top" title="רוצה לשנות זווית ראיה?" style={{backgroundColor:'transparent', color:'gray'}}><DirectionsRun style={{fontSize: '20px'}}/></Tooltip>}  />
                <Tab  className={classes.tab} style={{fontFamily: "Helvetica Neue, sans-serif"}}
                      icon={value==1 ?
                          <HourglassFull style={{fontSize: '15px'}}/>
                          :
                          <Tooltip placement="top" title="רוצה לשנות זווית ראיה?" style={{backgroundColor:'transparent', color:'gray'}}><HourglassFull style={{fontSize: '15px'}} /></Tooltip>} label="מפלגות בזמן ההצבעה" />
            </Tabs>
        </Paper>
    );
}