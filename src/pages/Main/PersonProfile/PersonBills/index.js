import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { IconButton, Tooltip } from '@material-ui/core';
import clsx from 'clsx'
import config from '../../../../config'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

import Dialog from '../../../../components/Dialog'

export default React.memo(function PersonBills({personID, filter}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await (await fetch(`${config.server}/PersonBills?personId=${personID}`)).json()
      setData(res)
      setLoading(false)
    })()
  }, [setLoading, personID])


  if (loading) {
    return (<div className={classes.root}><CircularProgress /></div>)
  }

  const filteredData = data.filter(d => filter == null || getReducedType(d) === filter).slice(0, 100)

  return (
    <ControlledAccordions data={filteredData} />
  );
})

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1em',
        width: '88%',
        textAlign: 'center'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '100%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.text.secondary,
    },
    accordionRow: {
        backgroundColor: '#f3f9ff',
    },
    accordionRowOpen: {
        boxShadow: 'inset 0 0 11px 7px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
    },
    accordionIcon: {
        paddingLeft: '0.7em',
        alignSelf: 'center',
    }
  }));

function ControlledAccordions({data}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [dialog, setDialog] = React.useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Dialog open={dialog !== null} setOpen={() => setDialog(null)} closeText='סגור'>
        <strong>{dialog?.billName}</strong>
        <p>{dialog?.summaryLaw}</p>
      </Dialog>
      {data.length > 0 ? data.map((x, i) => 
      <Accordion
          key={x.billID}
          className={clsx({[classes.accordionRow] : true, [classes.accordionRowOpen] : expanded === `panel${i}`})}
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <StatusToIcon {...x} />
          <div style={{width: '100%'}}>
              <div
                  ><Typography className={classes.heading}>{x.billName}</Typography>
                  </div>
              <div>
                  {x.billSubName && <Typography className={classes.secondaryHeading}>{x.billSubName} - הכנסת ה-{x.knessetNum}</Typography>}
                  {!x.billSubName && <Typography className={classes.secondaryHeading}>הכנסת ה-{x.knessetNum}</Typography>}
              </div>
          </div>
          {x.summaryLaw &&    
            <IconButton onClick={e => {
              e.preventDefault()
              setDialog(x)
            }}>
              <HelpOutlineRoundedIcon />
            </IconButton>
          }
        </AccordionSummary>          
        <AccordionDetails>                          
          <div><ClickableDocs documents={x.documents} /></div>
        </AccordionDetails>          
      </Accordion>
      ) :
        <Typography style={{color: 'white'}} variant='h3'>
            לא נמצאו חוקים
        </Typography>}
    </div>
  );
}
function ClickableDocs({documents}) {
  return <>
    {documents.map(x => 
      <div key={x.filePath}>
        { x.filePath ?
          <a href={x.filePath} style={{textDecoration: 'none', display: '-webkit-inline-box', textIndent: '2em'}}>
              <DescriptionRoundedIcon className='accordionIcon' style={{ color: '#5d5d5d' }} />
              <Typography style={{ color: '#5d5d5d', fontSize: '.8em' }}>{x.groupTypeDesc}</Typography>
          </a>
          : <Typography style={{ color: '#5d5d5d', fontSize: '.8em' }}>לא נמצאו מסמכים</Typography>
        }
      </div>)}
  </>
}

function StatusToIcon({statusID, desc}) {
  const classes = useStyles();
  let icon = <></>
  switch(statusID) {        
      case 177:
          icon = <CloseRoundedIcon className={classes.accordionIcon} style={{ color: '#ce1313' }} />;
          break
      case 118:
          icon = <CheckRoundedIcon className={classes.accordionIcon} style={{ color: '#108737' }} />        
          break
      case 120:
      case 126:
      case 158:
      case 161:
      case 162:
      case 165:
      case 169:
      case 175:
          icon = <LoopRoundedIcon className={classes.accordionIcon} style={{ color: '#6f6f6f' }} />        
          break
      default:
          icon = <AccessTimeRoundedIcon className={classes.accordionIcon} style={{ color: '#e39e36' }} />            
    }
    return <Tooltip placement="top-end" title={<h3>{desc}</h3>} arrow>{icon}</Tooltip>
}

function getReducedType(bill) {
  switch (bill.statusID)
  {
    case 177:
        return 'נעצרה'
    case 118:
        return 'אושרה'
    case 120:
    case 126:
    case 158:
    case 161:
    case 162:
    case 165:
    case 169:
    case 175:
        return 'אחר'
    default:
      return 'בתהליך'
  }
}