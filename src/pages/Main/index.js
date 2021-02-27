import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'

import ScrollableView from '../../components/ScrollableView'
import Search from './Search'
import PersonProfile from './PersonProfile'
import Quotes from './Quotes'
import Calendar from './Calendar'
import AboutDialog from './About'

import './index.css'
import particlesConfig from './particles.config.json'
import { AppBar, Button, Tooltip, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex', 
    flexDirection: 'column', 
    height: '100vh', 
    width: '100%',
  },
  particles: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
  },

  title: {
    whiteSpace: 'nowrap',
    fontSize: '2em',
    color: 'white',
    letterSpacing: '-2px',
    transition: 'all .2s ease-in',
    transform: 'scale(1)',
    '& $bigLetter': {
      fontSize: '120%',
    },
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  bigLetter: {},
  appbar: {
    zIndex: 50,
  },
});

export default function Main() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TopBar />
      <ScrollableView>
        <CustomParticles />
        <Search />
        <PersonProfile />
        <Quotes />
        <Calendar />
      </ScrollableView>
    </div>
    )
}

function CustomParticles() {
  const classes = useStyles()
  return <Particles params={particlesConfig} className={classes.particles} />
}


function TopBar() {
  const classes = useStyles()
  const [ aboutOpen, setAboutOpen ] = useState(false)

  return (
    <AppBar position="sticky" classes={{root: classes.appbar}}>
      <AboutDialog open={aboutOpen} setOpen={setAboutOpen} />
      <div className="appbar-grid-container">
        <div className="nav">
          <Button href="#top">
            ראשי
          </Button>
          <Button href="#person">
            ח"כים
          </Button>
          <Button href="#quotes">
            ציטוטים 
          </Button>
          <Button href="#calendar">
            לו"ז
          </Button>
          <div className="spacer" />
        </div>
        <Logo />
        <div className="links">
          <div className="spacer" />
          <Button href="#contact">
            צרו קשר
          </Button>
          <Button href onClick={() => setAboutOpen(true)}>
            אודות
          </Button>
          <Tooltip title={<h2>מזלגו אותנו ב-GitHub</h2>} arrow>
            <IconButton href="https://github.com/SgtTepper/BetaKnesset">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
  </AppBar>
  )
}

function Logo() {
  const classes = useStyles()
  return (
    <div className="logo">
      <a href="#top">
        <Typography color="primary" variant="h2" component="h1" className={classes.title}>
            <span className={classes.bigLetter}>ב</span>טא מחוקקי<span className={classes.bigLetter}>ם</span>
        </Typography>
      </a>
    </div>
  )
}