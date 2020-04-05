import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../API/index.js'
import { Line, Bar } from 'react-chartjs-2'
import CSS from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    console.log(dailyData)
    fetchAPI()
  }, [dailyData])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#333fff',
            backgroundColor: 'rgba(0,0,255,0.2)',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: '#ff0000',
            backgroundColor: 'rgba(255,0,0,0.2)',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  return (
    <div>
      <div className={CSS.container}>{lineChart}</div>
    </div>
  )
}

export default Chart
