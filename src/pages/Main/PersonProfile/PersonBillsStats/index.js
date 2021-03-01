import React, { useState, useEffect } from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js'
import 'chartjs-plugin-datalabels';
import config from '../../../../config'

export default React.memo(function PersonBillsStats({personID, filter, setFilter}) {
  const [data, setData] = useState([])
  
  useEffect(() => {
    (async () => {
      const res = await (await fetch(`${config.server}/PersonBillsStats?personId=${personID}`)).json()
      setData(res)    
    })()
  }, [personID])

  const total = data?.map(d => d.Counter).reduce((a, b) => a + b, 0)

  const doughnutData = {
    labels: data.map(d => d.Desc),
    datasets: [
      {
        data: data.map(d => d.Counter),
        backgroundColor: data.map(x => getStatusColor(x.Desc, filter)),
        hoverBackgroundColor: data.map(x => getStatusColorHover(x.Desc)),
        borderColor: data.map(x => filter === x.Desc ? "white" : getStatusColor(x.Desc, filter)),
        hoverBorderColor: data.map(x => filter === x.Desc ? "white" : getStatusColorHover(x.Desc, filter)),
        borderWidth: data.map(x => filter === x.Desc ? 5 : 0),
        hoverBorderWidth: 5,
      }
    ]
  }

  const options = {
    legend: {
      display: false,
      position: "right"
    },
    maintainAspectRatio: true,
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
          color: 'white',
          textAlign: 'center',
          formatter: function(value, context) {
            if (value / total < .05)
              return ''
            return context.chart.data.labels[context.dataIndex];
          }
      }
    },
    onClick: function(evt, element) {
      if (element[0] && data[element[0]._index].Desc) {
        if (filter === data[element[0]._index].Desc)
          setFilter(null)
        else
          setFilter(data[element[0]._index].Desc)
      }
      else
        setFilter(null)
    },
  }
  

  return (
    <>
      <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', placeItems: 'center', placeContent: 'center', color: 'white', fontFamily: "'Secular One', sans-serif", pointerEvents: 'none'}}>
        {total} חוקים
      </div>
      <Doughnut
        height={110}
        data={doughnutData} 
        options={options} 
      />
    </>
  );
})

function getStatusColor(status, filter) {
  if (status === filter)
    return getStatusColorHover(status)
  switch(status) {        
      case 'בתהליך':
          return '#FF9900'
      case 'אושרה':
          return '#109618'
      case 'נעצרה':
          return '#DC3912'
      default:
          return '#3366CC'           
    }
}
function getStatusColorHover(status) {
  switch(status) {        
      case 'בתהליך':
          return '#FFaa22'
      case 'אושרה':
          return '#30a638'
      case 'נעצרה':
          return '#fC5932'
      default:
          return '#5386eC'           
    }
}