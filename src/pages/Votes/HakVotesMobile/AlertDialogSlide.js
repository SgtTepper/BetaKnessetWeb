import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
import {createMuiTheme, withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../index.css"
import HelpOutline from "@material-ui/icons/HelpOutline";
import {Tooltip} from "@material-ui/core";


const selectStyle = {
    control: () => ({
        display: "flex",
        alignItems: "center",
        border: 0,
        height: "auto",
        fontSize: '0.5em',
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
        maxHeight: 50,
        maxWeight: 50,
        padding: '0 0.5px',
        fontFamily: 'Helvetica Neue, sans-serif',
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



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({allRules, startScreen}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div style={{textAlign: 'left'}}>

            <MyButton startIcon={
                <Tooltip title="מאגר החוקים" style={{backgroundColor:'white', color:'black'}}>
                <HelpOutline style={{marginTop: startScreen? '15px':'0', marginLeft: startScreen? '50px':'11px', color: startScreen? 'black':'white', fontSize:startScreen? '20':'40', textAlign:'center'}}/></Tooltip >}  variant="outlined" onClick={handleClickOpen}/>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    aria-table="alert-dialog-slide-table"
                    title="Dialog"
                    style={{width:'100vw'}}
                >
                    <div style={{fontFamily:  'Helvetica Neue, sans-serif',width:'80vw', maxHeight: '70vh', overflow:'hidden' }}>

                        <h1 style={{fontSize:'20px'}}>
                        מאגר הצעות החוק </h1>
                    <DialogContent style={{  fontFamily: 'Helvetica Neue, sans-serif',maxWidth: '80vw', maxHeight: '60vh', marginBottom: '0px'}} >
                        <div  style={{ tableLayout: 'fixed',textAlign: 'center'}}>
                            <DialogContentText id="alert-dialog-slide-description" style={{ tableLayout: 'fixed',textAlign: 'center', position:'relative', marginTop: '0px', fontSize:'14px',fontFamily: "'Helvetica Neue', sans-serif"}}>
                            מאגר החוקים מכיל הצעות חוק שהועלו להצבעה החל משנת 2011. למרבית הצעות החוק במאגר הצביעו מעל 90 ח"כים או שהועברו\נפסלו ברוב קטן. הצעות החוק עברו גם סינון (סובייקטיבי) שבמהלכו ניסינו לבחור את מה שיעניין את רוב הציבור. יש לכם רעיון לחוק מעניין שלא נמצא במאגר? נשמח לשמוע עליו!
                            </DialogContentText>

                            <table style={{ tableLayout: 'fixed', marginBottom: '10px'}}>
                                <th>נושא</th>
                                <th>הצעת החוק</th>
                                {allRules.map((rule)=> <React.Fragment><tr><td style={{fontWeight: 'normal'}}>
                                    {rule.Subject}</td><td>{rule.id}</td></tr></React.Fragment>)}
                            </table>
                        </div>
                    </DialogContent>
                    </div>
                </Dialog>
        </div>
    );
}