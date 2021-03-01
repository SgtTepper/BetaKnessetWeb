import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from './Dialog'
import IconButton from '@material-ui/core/IconButton'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

export default function Explainer({children, style}) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <IconButton href onClick={() => setOpen(true)} style={{position: 'absolute', top: 0, left: 0, ...style}}>
            <InfoRoundedIcon style={{fill: 'white'}} />
            </IconButton>
            <Dialog open={open} setOpen={setOpen} closeText={'בסדר'}>
                <Typography color="primary" variant="h4" component="h4">
                מה אני רואה פה?
                </Typography>
                {children}
            </Dialog>
        </>
    )
  }
