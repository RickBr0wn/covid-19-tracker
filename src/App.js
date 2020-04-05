import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import CSS from './App.module.css'
import { fetchData } from './components/API'

class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    console.log('APP:', data)
    return (
      <div className={CSS.container}>
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}

export default App
