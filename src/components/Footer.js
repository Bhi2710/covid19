import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#1A1A2E", textAlign:"center"}}>
      <Typography variant='h2' color="white" pt={"4rem "}>
        VACCOVID.LIVE
      </Typography>
      <Typography variant='h6' color="white" pb={"4rem"}>
        VacCovid is an up to date vaccine and covid-19 tracker which has been landed in order to inform people from all over the planet about the present novel coronavirus (COVID-19) pandemic.
      </Typography>
    </div>
  )
}

export default Footer