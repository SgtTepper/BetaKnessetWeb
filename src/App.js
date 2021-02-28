import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'
import TopBar from "./components/TopBar"
import particlesConfig from './particles.config.json'
import ScrollableView from './components/ScrollableView'

const Main = lazy(() => import('./pages/Main'))
const Document = lazy(() => import('./pages/Document'))
const Quotes = lazy(() => import('./pages/Quotes'))
const Calendar = lazy(() => import('./pages/Calendar'))

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
});

export default function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <TopBar />
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
                <Route path="/quotes" component={Quotes} />
                <Route path="/calendar" component={Calendar} />
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
  const classes = useStyles()
  return <Particles params={particlesConfig} className={classes.particles} />
}