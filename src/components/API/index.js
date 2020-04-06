import React from 'react'
import axios from 'axios'

const BaseURL = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let URL = BaseURL

  if (country) {
    URL = `${URL}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL)

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${BaseURL}/daily`)

    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${BaseURL}/countries`)
    return countries.map(({ name }) => name)
  } catch (error) {
    console.log(error)
  }
}
