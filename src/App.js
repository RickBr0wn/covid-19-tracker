import React, { Component } from 'react'
import { Cards, Chart, CountryPicker, Footer, Ribbon } from './components'
import CSS from './App.module.css'
import { fetchData } from './components/API'
import covid from './images/image.png'
import { Typography } from '@material-ui/core'

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
        <Ribbon url={'https://github.com/RickBr0wn/covid-19-tracker'} />
        <img className={CSS.image} src={covid} alt="covid19" />
        <Typography className={CSS.hookLine}>
          This app has been developed to allow you to monitor the infections
          from the SARS-COVID19 virus across the globe.
        </Typography>
        {/* <Typography>Check out the wikipedia page</Typography> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    )
  }
}

export default App
