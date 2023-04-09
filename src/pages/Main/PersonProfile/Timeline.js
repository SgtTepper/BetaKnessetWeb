import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkIcon from '@mui/icons-material/Work';
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

function MyTimelineItem({type, knessetNum, mainText, startDate}) {
    const classes = useStyles();

    let timelineDot = null;
    switch (type) {
      case "faction":
        timelineDot = (
          <TimelineDot className={classes.circle} color="text">
            <Typography>{knessetNum}</Typography>
          </TimelineDot>
        );
        break;

      case "committee":
        timelineDot = (
          <TimelineDot className={classes.circle} sx={{ bgcolor: "transparent" }}>
            <Diversity3Icon />
          </TimelineDot>
        );
        break;

      case "position":
        timelineDot = (
          <TimelineDot className={classes.circle} sx={{ bgcolor: "transparent" }}>
            <WorkIcon sx={{ color: "error.main" }} />
          </TimelineDot>
        );
        break;
    }

  
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
              {timelineDot}
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
      setLoading(true);
      setData([]);
      try {
        const res = await serverFetch(`${config.server}/PersonPositions?PersonID=${personID}`);
        setData(res.reverse());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })()
  }, [setLoading, personID, serverFetch]);

  if (personID == null || loading) {
    return null;
  }

  // aggregate faction data
  const factions = [];
  let lastFaction = null;
  for (const p of data) {
    if (p.FactionName != null && p.FactionName != lastFaction) {
      factions.push({type: "faction", description: p.FactionName, startDate: p.StartDate, knessetNum: p.KnessetNum});
      lastFaction = p.FactionName;
    }
  }

  const positions = [];
  for (const p of data) {
    // (government?) positions
    if (p.DutyDesc != null)
      positions.push({type: "position", description: p.DutyDesc || p.CommitteeName, startDate: p.StartDate, knessetNum: p.KnessetNum});
    // committe positions
    else if (p.CommitteeName != null && p.Description != null)
      positions.push({type: "committee", description: `${p.Description} - ${p.CommitteeName}`, startDate: p.StartDate, knessetNum: p.KnessetNum});
  }

  // combine to one array
  positions.push(...factions);

  // sort by date
  positions.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
      <Timeline position="alternate" className={classes.timeline}>
        {positions.map(({type, description, startDate, knessetNum}, i) => (
          <MyTimelineItem key={i} type={type} knessetNum={knessetNum} mainText={description} startDate={startDate} />
        ))}
      </Timeline>
  );
} 