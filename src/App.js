import React, { Suspense, lazy, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'
import NavigationBar from "./components/NavigationBar"
import particlesConfig from './particles.config.json'
import ScrollableView from './components/ScrollableView'
import Dialog from './components/Dialog'
import { Typography } from '@material-ui/core'

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
  const [disclaimerOpen, setDisclaimerOpen] = useState(true)
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <DisclaimerDialog open={disclaimerOpen} setOpen={setDisclaimerOpen} />
      <div className={classes.root}>
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

function DisclaimerDialog(props) {
    return (
        <Dialog {...props} closeText={'אישור'}>
            <Typography color="primary" variant="h4" component="h4">
                גילוי נאות
            </Typography>
            <p>
              <b>לתשומת לב הגולשים</b>              
            </p>
            <p>
              האתר מתבסס על  <a href="https://main.knesset.gov.il/Activity/Info/pages/databases.aspx" rel="noreferrer" target="_blank"><u>מאגרי המידע הפתוחים של הכנסת</u></a> וזאת בהתאם לתקנות המתירות פיתוח יישומים ומערכות על בסיס מידע זה.
            </p>
            <p>
              באתר זה מוצגים פריטים שהינם תוצאה של אלגוריתמים לעיבוד מידע אשר אינם חפים מטעויות, כך יתכן למשל שהתוכנה שלנו תבצע טעות בזיהוי דובר, בפירוש הטקסט שלו, או במדידת ערכים הקשורים בו.
            </p>
            <p>
              למען הסר ספק המידע האמין והמדויק ביותר הינו זה שמקורו במאגרי המידע של הכנסת ובמסמכי הפרוטוקולים שמפורסמים באתר הכנסת והם מקור האמת המכריע.
            </p>
            <p>
              הנהלת האתר אינה נושאת באחריות על טעויות כאלו שיתכנו, השימוש באתר ושיתוף המידע שבאתר הינו באחריות המשתמש בלבד.
            </p>
        </Dialog>
    )
}