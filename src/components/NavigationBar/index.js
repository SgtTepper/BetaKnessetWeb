import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { useNavigate } from '../../utils'
import AboutDialog from './About'
import ContactUsDialog from './ContactUs'

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

    drawerPaper: {
      minWidth: 150,
    },
    mobileAppBar: {
      display: 'flex',
      flexDirection: 'row',
      placeContent: 'space-between',
      padding:' 0 1em 0 0',
    },

    bigLetter: {},
  });  


export default function NavigationBar() {
    const [ aboutOpen, setAboutOpen ] = useState(false)
    const [ contactUsOpen, setContactUsOpen ] = useState(false)
    const isBigScreen = useMediaQuery('(min-width:600px)')

    const nav = [
      {
        navigate: {location: '/', hash: '#top'},
        contents: "ראשי",
      },
      {
        navigate: {location: '/', hash: '#person'},
        contents: "ח״כים",
      },
      {
        navigate: {location: '/quotes'},
        contents: "ציטוטים",
      },
      {
        navigate: {location: '/calendar'},
        contents: 'לו״ז',
      },
    ]

    const links = [
      {
        callback: () => setContactUsOpen(true),
        contents: "צרו קשר",
      },
      {
        callback: () => setAboutOpen(true),
        contents: "אודות",
      },
    ]

    const main = isBigScreen 
      ? <NavBar nav={nav} links={links} />
      : <NavDrawer nav={nav} links={links} />

    return (
    <>
      <AboutDialog open={aboutOpen} setOpen={setAboutOpen} />
      <ContactUsDialog open={contactUsOpen} setOpen={setContactUsOpen} />
      {main}
    </>
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


const NavBar = React.memo(function ({nav, links}) {
  const classes = useStyles()
  const navigateFn = useNavigate()
  return (
    <AppBar position="sticky">
      <div className={classes.gridContainer}>
        <div className={classes.nav}>
          {nav.map(({contents, navigate, callback}) => {
            const cb = navigate ? () => navigateFn(navigate) : callback
            return (
              <Button onClick={cb} key={contents}>
                {contents}
              </Button>
            )
          })}
          <div className={classes.spacer} />
        </div>
        <Logo />
        <div className={classes.links}>
          <div className={classes.spacer} />
          {links.map(({contents, navigate, callback}) => {
            const cb = navigate ? () => navigateFn(navigate) : callback
            return (
              <Button onClick={cb} key={contents}>
                {contents}
              </Button>
            )
          })}
          <Tooltip title={<h2>מזלגו אותנו ב-GitHub</h2>} arrow>
            <IconButton href="https://github.com/SgtTepper/BetaKnessetWeb">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
  </AppBar>
  )
})

const NavDrawer = React.memo(function ({nav, links}) {
  const classes = useStyles()
  const navigateFn = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const createToggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open)
  }

  return (
    <AppBar position="sticky" classes={{root: classes.mobileAppBar}}>
      <Logo />
      <IconButton onClick={createToggleDrawer(true)}>
        <MenuIcon style={{fill: 'white'}} />
      </IconButton>
      <Drawer 
        anchor='right' 
        open={drawerOpen} 
        onClose={createToggleDrawer(false)}        
        classes={{
          paper: classes.drawerPaper,
      }}>
        <List>
          {nav.map(({contents, navigate, callback}) => {
            const cb = () => {
              if (navigate)
                navigateFn(navigate)
              else
                callback()
              setDrawerOpen(false)
            }
            return (
              <ListItem button onClick={cb} key={contents}>
                <ListItemText primary={contents} />
              </ListItem>
            )
          })}
          <Divider />
          {links.map(({contents, navigate, callback}) => {
            const cb = navigate ? () => navigateFn(navigate) : callback
            return (
              <ListItem button onClick={cb} key={contents}>
                <ListItemText primary={contents} />
              </ListItem>
            )
          })}
          <ListItem button href="https://github.com/SgtTepper/BetaKnessetWeb">
            <ListItemText primary={<GitHubIcon />} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
})