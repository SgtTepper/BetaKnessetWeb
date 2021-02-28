import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import { AppBar, Button, Tooltip, Typography } from '@material-ui/core'
import { useNavigate } from '../../utils'
import AboutDialog from './About'

const useStyles = makeStyles({
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
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr min-content 1fr',
      gridTemplateRows: '1fr',
      gap: '0% 1%',
      gridTemplateAreas: '"nav logo links"',
      padding: '.2em 0',
    },
    nav: { 
      gridArea: 'nav',
      justifyItems: 'flex-start',
      display: 'flex',
      alignItems: 'center',
  
      '& button, & a': {
        fontFamily: '"Varela Round", sans-serif',
        fontSize: '120%',
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none',
        borderRadius: 0,       
      },
    },
    logo: { gridArea: 'logo' },
    links: { 
      gridArea: 'links',
      justifyItems: 'flex-end',
      display: 'flex',
      alignItems: 'center',
  
      '& button, & a': {
        fontFamily: '"Varela Round", sans-serif',
        fontSize: '120%',
        flexGrow: 1,
        color: 'white',
        textDecoration: 'none',
        borderRadius: 0,       
      },
    },

    spacer: {
      flexGrow: 12,
    },

    bigLetter: {},
  });  


export default function TopBar() {
    const classes = useStyles()
    const navigate = useNavigate()
    const [ aboutOpen, setAboutOpen ] = useState(false)
  
    return (
      <AppBar position="sticky" classes={{root: classes.appbar}}>
        <AboutDialog open={aboutOpen} setOpen={setAboutOpen} />
        <div className={classes.gridContainer}>
          <div className={classes.nav}>
            <Button onClick={() => navigate({location: '/', hash: '#top'})}>
              ראשי
            </Button>
            <Button onClick={() => navigate({location: '/', hash: '#person'})}>
              ח"כים
            </Button>
            <Button onClick={() => navigate({location: '/quotes'})}>
              ציטוטים 
            </Button>
            <Button onClick={() => navigate({location: '/calendar'})}>
              לו"ז
            </Button>
            <div className={classes.spacer} />
          </div>
          <Logo />
          <div className={classes.links}>
            <div className={classes.spacer} />
            <Button href="#contact">
              צרו קשר
            </Button>
            <Button onClick={() => setAboutOpen(true)}>
              אודות
            </Button>
            <Tooltip title={<h2>מזלגו אותנו ב-GitHub</h2>} arrow>
              <IconButton href="https://github.com/SgtTepper/BetaKnessetWeb">
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
    const navigate = useNavigate()
    return (
      <div className={classes.logo}>
        <a href="#top" onClick={() => navigate({location: '/', hash: '#top'})}>
          <Typography color="primary" variant="h2" component="h1" className={classes.title}>
              <span className={classes.bigLetter}>ב</span>טא מחוקקי<span className={classes.bigLetter}>ם</span>
          </Typography>
        </a>
      </div>
    )
  }