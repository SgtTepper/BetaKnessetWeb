import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import CircularProgress from '@material-ui/core/CircularProgress'

import config from '../../config'
import { usePersonID } from '../../utils';

const options = {
  rotations: 3,
  rotationAngles: [-5, 5],
  fontSizes: [20, 75],
  fontFamily: "sans-serif",
  fontWeight: "600",
  padding: 3
};

export default React.memo(function WordCloud() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const personID = usePersonID()
  
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
    <>
    {data && <ReactWordcloud
      options={options}
      words={data}
      maxWords={75}
      minSize={[200, 300]}
      style={{}}
    />}
    </>
  );
})