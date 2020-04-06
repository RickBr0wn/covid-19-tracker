import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import CSS from './App.module.css'
import { fetchData } from './components/API'

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country)
    this.setState({ data, country })
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={CSS.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
