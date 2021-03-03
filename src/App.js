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
import particlesConfig from './particles.config.json'
const Votes = lazy(() => import ('./pages/Votes'))

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
          <div>
            <CustomParticles />
            <Suspense fallback={<LightweightLoader/>}>
              <Switch>
                  <Route path="/" component={Votes}/>
              </Switch>
            </Suspense>
          </div>
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