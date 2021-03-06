import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { useQuery, useCancellableFetch } from '../../../utils'

import config from '../../../config'
 
const CachedHistogramView = React.memo(function HistogramView({query}) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const serverFetch = useCancellableFetch()

    useEffect(() => {
      (async () => {
        setLoading(true)
        setData([])
        try {
          const res = await serverFetch(`${config.server}/KeywordTrend?keyword=${query}`)
          setData(res)
        } catch (e) {
          console.error(e)
        } finally {
          setLoading(false)
        }
      })()
    }, [setLoading, query, serverFetch])
  
    if (loading) {
      return null
    }

    if (!data.length || data.every(d => !d.counter))
        return null

    const dataFn = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0, 0, 0, 140);
      gradient.addColorStop(0, 'rgba(0,100,255,.6)');   
      gradient.addColorStop(1, 'rgba(0,100,255,.2)');

      return {    
        labels: data.map(d => `${d.month}.${(parseInt(d.year) % 100).toString().padStart(2, '0')}`),
        datasets: [
          {
            label: 'trend',
            type: 'line',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            pointRadius: 2,
            pointRadiusHover: 10,
            fill: true,
            data: data.map(d => d.counter),
            backgroundColor: gradient
          },
          {
            label: 'bar',
            type: 'bar',
            backgroundColor: 'transparent',
            data: data.map(d => d.counter),
          },
        ],
      }
    }

    const options = {
      responsive: true, 
      maintainAspectRatio: false,

      onClick: function(evt, element) {
        if (!element.length)
          return
        const {month, year, counter} = data[element[0]._index]
        if (!counter)
          return

        // TODO
        console.log(month, year)
      },
      layout: {
        padding: {
          top: 5,
        }
      },
      datasets: {
        barPercentage: .95,
      },
      scales: {
        xAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
              fontColor: "#444", // this here
            },
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display:false
            },
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        rtl: true,
        custom: function(tooltip) {
          if (!tooltip) return;
          // disable displaying the color box;
          tooltip.displayColors = false;
        },
        callbacks: {
          label: function(tooltipItem, data) {
            return `${tooltipItem.yLabel} תוצאות`
          }
        }
      },

      plugins: {
        // important - disabling chartjs-plugin-datalabels stupid global override
        datalabels: {
            formatter: () => ""
        }
      },
    }

return (
  <div style={{position: 'absolute', bottom: 0, zIndex: 15, width: '100%', height: '15vh'}}>
    <Bar data={dataFn}  options={options} />
  </div>
  )
})

export default React.memo(function HistogramView() {
  const query = useQuery()

  return <CachedHistogramView query={query} />
})