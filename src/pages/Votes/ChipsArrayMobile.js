import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineRounded from '@material-ui/icons/CheckCircleOutlineRounded';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(1),
        margin: 0,
        maxWidth: '100vw',
        textAlign: 'right'
    },
    choosenChip: {
        margin: theme.spacing(0.5),
        background: 'rgba(70,138,15,0.6)',
        color: 'black',
        fontFamily:"'Helvetica Neue', sans-serif",
        padding: '0 0.2em',
        textAlign: 'right',
        float: 'left',
        fontSize: '13px'

    },
    unchoosenChip: {
        margin: theme.spacing(0.5),
        background: 'rgba(136,136,140,0.5)',
        color: 'black',
        fontFamily:"'Helvetica Neue', sans-serif",
        padding: '0 0.2em',
        textAlign: 'right',
        float: 'left',
        fontSize: '13px'

    },
    icon: {
        margin: '0 0.2em',
        textAlign: 'right',
        float: 'right'

    }
}));


export default function ChipsArrayMobile(options, setOptions) {
    const classes = useStyles();

    function handleClick(label){
        console.info('You clicked the Chip.');
        console.info(label)
        options.setOptions(options.options.map(e => ({ label: e.label, key: e.key, isChosen: e.label === label? e.isChosen ^ 1: e.isChosen})));
    };

    console.log(options.options.filter(e => e.isChosen === 1));
    return (
        <Paper component="ul" className={classes.root}>
            {options.options.map((data) => {

                return (
                    <li key={data.key} style={{textAlign: 'right'}}>
                        <Chip
                            icon={data.isChosen === 1? <CheckCircleOutlineRounded className={classes.icon}/> :  <CancelOutlinedIcon className={classes.icon}/>}
                            label={data.label}
                            className={data.isChosen === 1 ? classes.choosenChip : classes.unchoosenChip}
                            onMouseDown={() => handleClick(data.label)}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}