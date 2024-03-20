import React from 'react'
import SearchFunction from '../../components/SearchFunction'
import './page.css'

import Box from '@mui/material/Box';

import WeatherCard from '../../components/WeatherCard';


function DetailsPage() {



  return (
    <div className='detailsPage'>
      <div>
      <SearchFunction />
      </div>
      <div>
        <WeatherCard />
      </div>
      <div className='bg'>
      </div>
    </div>
  )
}

export default DetailsPage
