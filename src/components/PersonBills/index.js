import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Tooltip } from '@material-ui/core';
import clsx from 'clsx'
import config from '../../config'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CallMergeRoundedIcon from '@material-ui/icons/CallMergeRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

export default React.memo(function PersonBills({personID}) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await (await fetch(`${config.server}/PersonBills?personId=${personID}`)).json()
      setData(res)
      setLoading(false)
    })()
  }, [setLoading, personID])

  if (loading) {
    return (<CircularProgress />)
  }

  return (
    <>
    <ControlledAccordions data={data} />
    </>
  );
})

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1em',
        width: '88%',
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
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.root}>
        {data.map((x, i) => 
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
            {StatusToIcon(x.statusID, x.desc)}                                   
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
              <div style={{textAlign: 'left', placeSelf: 'center'}}>
                <Tooltip placement="top-end" title={<h3>{x.summaryLaw}</h3>} arrow>
                  <HelpOutlineRoundedIcon style={{ color: '#6f7275', alignSelf: 'center', paddingLeft: '.5em' }} />
                </Tooltip>
              </div>}
          </AccordionSummary>          
          <AccordionDetails>                          
            <div>{CreateClickableDocs(x.documents)}</div>
          </AccordionDetails>          
        </Accordion>
        )}
      </div>
    );
  }

  function CreateClickableDocs(documents) {
    return documents.map(x => 
        <div>
            <a href={x.filePath} style={{textDecoration: 'none', display: '-webkit-inline-box', textIndent: '2em'}}>
                <DescriptionRoundedIcon className='accordionIcon' style={{ color: '#5d5d5d' }} />
                <Typography style={{ color: '#5d5d5d', fontSize: '.8em' }}>{x.groupTypeDesc}</Typography>
            </a>
        </div>)
  }

  function StatusToIcon(status, statusDesc) {
    const classes = useStyles();
    let icon = <></>
    switch(status) {        
        case 177:
            icon = <CloseRoundedIcon className={classes.accordionIcon} style={{ color: '#ce1313' }} />;
            break
        case 118:
            icon = <CheckRoundedIcon className={classes.accordionIcon} style={{ color: '#108737' }} />        
            break
        case 161:
        case 169:
        case 158:
        case 126:
        case 162:
        case 122:
            icon = <CallMergeRoundedIcon className={classes.accordionIcon} style={{ color: '#9c9c9c' }} />
            break
        default:
            icon = <AccessTimeRoundedIcon className={classes.accordionIcon} style={{ color: '#e39e36' }} />            
      }
      return <Tooltip placement="top-end" title={<h3>{statusDesc}</h3>} arrow>{icon}</Tooltip>
  }