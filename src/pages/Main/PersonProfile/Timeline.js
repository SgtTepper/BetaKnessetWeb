import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { toNiceDate, useCancellableFetch } from '../../../utils'

import ScrollableView from '../../../components/ScrollableView';
import config from '../../../config'
 
const useStyles = makeStyles(theme => ({
    timeline: {
      color: "white",
      direction: "ltr",
      '& .MuiTypography-root': {
        fontFamily: "'Secular One', sans-serif",
      },
    },
    item: {
    },
    content: {
        direction: "rtl",
        color: "gray",
    },
    circle: {
        width: "1.5em",
        height: "1.5em",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        '& .MuiTypography-root': {
          color: "white",
          fontFamily: "'Secular One', sans-serif",
        },
    },
  }));

function MyTimelineItem({knessetNum, mainText, startDate}) {
    const classes = useStyles();
    return (
          <TimelineItem className={classes.item}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              className={classes.content}
            >
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className={classes.circle} color="primary">
                <Typography>{knessetNum}</Typography>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {mainText}
              </Typography>
              <Typography className={classes.content}>{toNiceDate(new Date(startDate))}</Typography>
            </TimelineContent>
          </TimelineItem>
    ); 
}

export default function CustomizedTimeline({personID}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const serverFetch = useCancellableFetch();

  useEffect(() => {
    (async () => {
      if (personID == null) {
        return;
      }
      setLoading(true)
      setData([])
      try {
        const res = await serverFetch(`${config.server}/PersonPositions?PersonID=${personID}`)
        setData(res.reverse())
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [setLoading, personID, serverFetch]);

  if (personID == null || loading) {
    return null;
  }

  // aggregate faction data
  const factions = []
  let lastFaction = null
  for (const p of data) {
    if (p.FactionName != null && p.FactionName != lastFaction) {
      factions.push({faction: p.FactionName, startDate: p.StartDate, knessetNum: p.KnessetNum})
      lastFaction = p.FactionName
    }
  }

  return (
      <Timeline position="alternate" className={classes.timeline}>
        {factions.map(({faction, startDate, knessetNum}, i) => (
          <MyTimelineItem key={i} knessetNum={knessetNum} mainText={faction} startDate={startDate} />
        ))}
      </Timeline>
  );
} 
/*

          <TimelineItem key={i} className={classes.item}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              className={classes.content}
            >
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className={classes.circle} color="primary">
                <Typography>{knessetNum}</Typography>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {faction}
              </Typography>
              <Typography className={classes.content}>{toNiceDate(new Date(startDate))}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
        */