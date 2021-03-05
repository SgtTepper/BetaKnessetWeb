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
                כדי לראות את הבועות <strong style={{fontSize:'17px'}}  >החליקו שמאלה.</strong>
                <br/>
                כעת תוכל\י לראות איך הח״כים הרצים הצביעו ביחס להצבעתך.
                <br/>
                <span style={{color:'green'}}>הירוקים</span> - הצביעו כמוך.  <span style={{color:'red'}}>האדומים</span>    - לא.
                <br/>
                גודל הבועות מחושב באופן מצטבר בהתאם למה שהצבעת עד כה.
            </DialogContentText>
            <DialogActions>
                <Button style= {{backgroundColor:'blue', color:'white'}} onClick={handleClose}> הבנתי</Button>
            </DialogActions>
        </Dialog>
    )
}