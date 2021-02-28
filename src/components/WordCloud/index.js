import React, { lazy, Suspense, useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

import config from '../../config'
import { usePersonID } from '../../utils';

const ReactWordcloud = lazy(() => import('react-wordcloud'))

const options = {
  rotations: 3,
  rotationAngles: [-5, 5],
  fontSizes: [20, 75],
  fontFamily: "sans-serif",
  fontWeight: "600",
  padding: 3,
  enableOptimizations: true,
}
const minSize = [200, 300]

export default React.memo(function WordCloud() {
  const personID = usePersonID()
  return <CachedWordCloud personID={personID} />
})

const CachedWordCloud = React.memo(({personID}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  
  useEffect(() => {
    (async () => {
      if (!personID) return
      setLoading(true)
      const res = await (await fetch(`${config.server}/WordCloud?personId=${personID}`)).json()
      if (res.length) {
        setData(JSON.parse(res[0].WordCloud))
      } else {
        setData(null)
      }
      setLoading(false)
    })()
  }, [personID])

  if (loading) {
    return (<CircularProgress />)
  }
  if (!data)
    return null

  return (
    <Suspense fallback={<CircularProgress />}>
      {data && <ReactWordcloud
        options={options}
        words={data}
        maxWords={config.wordcloudCount}
        minSize={minSize}
      />}
    </Suspense>
  )
})
//export default CachedWordCloud