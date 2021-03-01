import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import HelpOutline from "@material-ui/icons/HelpOutline";


const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        fontFamily: 'Varela Round, sans-serif'
    },
}))(Tooltip);

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(6),
        border: '1px solid #dadde9',
        fontFamily: 'Varela Round, sans-serif'


    },
}))(Tooltip);

export default function PartyHelp() {
    return (
        <div>

            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">גודל הבועות ועובי קו המתאר נקבעים לפי רמת ההסכמה\חוסר ההסכמה של מפלגה איתכם (גדול יותר משמעותו קיצוני יותר לכאן או לכאן). צבע קו המתאר <span style={{color:"red"}}>אדום</span> אם מידת אי ההסכמה גדולה יותר ו<span style={{color:"green"}}>ירוק</span> אם מידת ההסכמה גדולה יותר.<br/> </Typography>
                    </React.Fragment>
                }
                placement="left-end"
            >
                <HelpOutline style={{marginTop:'15px', marginLeft:'11px', color: 'white', fontSize: '25', textAlign:'center'}}/>
            </HtmlTooltip>
        </div>
    );
}
