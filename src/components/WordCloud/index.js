import React, { lazy, Suspense, useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import Explainer from '../Explainer'
import config from '../../config'
import { useBigScreen, useCancellableFetch, usePersonID } from '../../utils';

const ReactWordcloud = lazy(() => import('react-wordcloud'))

const options = {
  colors: ["#40b2e6","#53b4e0","#4f91ab","#8aaebd","#bad3de", "#d8e3e8"],
  rotations: 3,
  rotationAngles: [-5, 5],
  fontSizes: [20, 75],
  fontFamily: "'Secular One', sans-serif",
  fontWeight: "600",
  padding: 3,
  enableOptimizations: true,
  enableTooltip: false,
  deterministic: true,
}
const minSize = [200, 300]

export default React.memo(function WordCloud() {
  const personID = usePersonID()
  return <CachedWordCloud personID={personID} />
})

const CachedWordCloud = React.memo(({personID}) => {
  const isBigScreen = useBigScreen()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const serverFetch = useCancellableFetch()
  
  useEffect(() => {
    (async () => {
      if (!personID) return
      setLoading(true)
      const res = await serverFetch(`${config.server}/WordCloud?personId=${personID}`)
      console.log(res)
      if (res.length) {
        setData(JSON.parse(res[0].WordCloud))
      } else {
        setData(null)
      }
      setLoading(false)
    })()
  }, [personID, serverFetch])

  if (loading) {
    return (<CircularProgress />)
  }
  if (!data)
    return null

  options.transitionDuration = isBigScreen ? 400 : 0

  return (
    <Suspense fallback={<CircularProgress />}>
      {data && <>
        <WordCloudExplainer style={{top: '-1em'}} />
        <ReactWordcloud
          options={options}
          words={data}
          maxWords={isBigScreen ? config.wordcloudCount : config.wordcloudCountMobile}
          minSize={minSize}
        />
      </>}
    </Suspense>
  )
})


function WordCloudExplainer(props) {
  return (
      <Explainer {...props}>
          <p>ענן מילים זה מבוסס על אוסף כל הציטוטים של הח"כ כפי שזיהינו אותם במערכת שלנו.</p>
          <p>בעזרת מערכת בינה מלאכותית לעיבוד שפה טבעית <u><a href="https://hebrew-nlp.co.il" target="_blank" rel="noreferrer">https://hebrew-nlp.co.il</a></u></p>
          <p>ביצענו "נורמליזציה" לאוצר המילים של הח"כ, כך מילים בעלות משמעות זהה התקבלו בכתיב אחיד, למשל "בטחון", "הבטחון", "לבטחון", "בבטחון" כולן עברו נורמליזציה למילה "בטחון".</p>
          <p>כמו כן מענן מילים זה מחקנו מונחים רבים כגון מילות קישור או מילים חסרות הקשר.</p>
          <p>לאחר עיבוד זה ספרנו את שכיחות השימוש במונחים, ככל שהח"כ משתמש\ת יותר במילה - כך המילה תופיע גדולה יותר בענן המילים.</p>
      </Explainer>
  )
}