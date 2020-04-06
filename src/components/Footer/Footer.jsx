import React from 'react'
import CSS from './Footer.module.css'
import { FaLaptopCode } from 'react-icons/fa'
import { Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <div className={CSS.container}>
      <div className={CSS.innerWrapper}>
        <FaLaptopCode className={CSS.icon} />
        <Typography>written by Rick Brown 2020</Typography>
      </div>
      {/* <Typography>global data taken from mathdroid</Typography> */}
    </div>
  )
}

export default Footer
