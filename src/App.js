import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import theme from './theme'

const Main = lazy(() => import('./pages/Main'))
const Document = lazy(() => import('./pages/Document'))

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Suspense fallback={<LightweightLoader/>}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/document/plenum/:id" render={(props) => (
            <Document type='plenum' {...props} />
          )} />
          <Route path="/document/committee/:id" render={(props) => (
            <Document type='committee' {...props} />
          )} />
        </Switch>
      </Suspense>
    </Router>
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