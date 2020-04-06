import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import CSS from './CountryPicker.module.css'
import { fetchCountries } from '../API'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const loadCountries = async () => {
      setCountries(await fetchCountries())
    }
    loadCountries()
  }, [setCountries])

  return (
    <div>
      <FormControl className={CSS.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default CountryPicker
