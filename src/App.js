import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import CSS from './App.module.css'
import { fetchData } from './components/API'
import covid from './images/image.png'

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
        <img className={CSS.image} src={covid} alt="covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
