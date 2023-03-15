import React, { Suspense, lazy, useEffect } from 'react'
import clsx from 'clsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import Particles from 'react-particles'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'

import config from './config'
import theme from './theme'
import { useBigScreen } from './utils'
import particlesConfig from './particles.config.json'
import NavigationBar from "./components/NavigationBar"
import ScrollableView from './components/ScrollableView'

const Main = lazy(() => import('./pages/Main'))
const Document = lazy(() => import('./pages/Document'))
const Quotes = lazy(() => import('./pages/Quotes'))
const Calendar = lazy(() => import('./pages/Calendar'))
const FrameApp = lazy(() => import('./pages/FrameApp'))

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
    flexDirection: 'column', 
    placeItems: 'stretch',
    overflowY: 'auto',
  },
  particles: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
  },
  backdrop: {
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    placeContent: 'space-around',
    height: '100%',
  },
}))

export default function App() {
  const isBigScreen = useBigScreen()
  const classes = useStyles()

  if (config.showOverloadedScreen)
    return <ThemeProvider theme={theme}><OverloadScreen /></ThemeProvider>

  return (
    <ThemeProvider theme={theme}>
      <div className={clsx(classes.root, isBigScreen ? "bigScreen" : "smallScreen")}>
        <Router>
          <NavigationBar />
          <ScrollableView>
            <CustomParticles />
            <Suspense fallback={<LightweightLoader/>}>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/document/plenum/:id" render={(props) => (
                  <Document type='plenum' {...props} />
                )} />
                <Route path="/document/committee/:id" render={(props) => (
                  <Document type='committee' {...props} />
                )} />
                <Route path="/quotes" render={(props) => (
                  <Quotes {...props} />
                )} />
                <Route path="/calendar" render={(props) => (
                  <Calendar {...props} />
                )} />

                {config.apps.map(app => (
                  <Route key={app.name} path={`/apps/${app.name}`} render={(props) => (
                    <FrameApp {...props} url={app.url} />
                  )} />
                ))}
              </Switch>
            </Suspense>
          </ScrollableView>
        </Router>
      </div>
    </ThemeProvider>
    )
}

function LightweightLoader() {
  return (
    <div style={{display: 'flex', width: '100%', height: '100vh', placeContent: 'center', placeItems: 'center'}}>
      <CircularProgress />
    </div>
  )
}

function CustomParticles() {
  const isBigScreen = useBigScreen()
  const classes = useStyles()
  
  if (!isBigScreen)
    return null
  return <Particles params={particlesConfig} className={classes.particles} />
}

function OverloadScreen() { 
  const classes = useStyles()

  // refresh automatically
  useEffect(() => {
    setTimeout(() => window.location.href = window.location, 30000)
  }, [])

  return (
    <Modal
      className={classes.modal}
      open={true}
      onClose={() => void(0)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        className: classes.backdrop,
      }}
    >
      <Fade in={true}>
        <Container className={classes.container}>
          <div>
            <Typography variant="h3">איזה עומס!</Typography>
          </div>

          <div>
            <Typography variant="h5">
              לא ציפינו לכזו כמות של תעבורה,
            </Typography>
            <Typography variant="h5">
              נחזור במהרה יותר מוכנים לכמות המשתמשים 😋
            </Typography>
          </div>
        </Container>
      </Fade>
  </Modal>
  )
}