import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";

export default function VotesDialog({open, setOpen}) {
    const handleClose= ()=>{
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleClose}  >
            <DialogTitle id="alert-dialog-title" style={{color: 'black', marginBottom:'-10px'}}>
                <h1 style={{fontSize:'20px', color: 'black'}}>
                    הצבעת בהצבעה הראשונה שלך!</h1> </DialogTitle>
            <DialogContentText style={{fontSize:'15px', fontFamily: "'Helvetica Neue', sans-serif", padding: '0em 0.5em'}}>
                ברוכ\ה הבא\ה לכנסת
                <br/>
                <span style={{fontSize:'18px'}}>גודל</span><span style={{fontSize:'16px', color:'green'}}> וצ</span><span style={{fontSize:'16px',color:'red'}}>בע</span> הבועות מחושב באופן  <span style={{fontSize:'16px',fontStyle:'italic', textDecorationLine:'underline'}}> מצטבר</span> בהתאם למה שהצבעת עד כה.
            </DialogContentText>
            <DialogActions>
                <Button style= {{backgroundColor:'blue', color:'white'}} onClick={handleClose}> הבנתי</Button>
            </DialogActions>
        </Dialog>
    )
}