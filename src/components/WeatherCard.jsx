import React from 'react'
import './WeatherCard.css';
import Cloudy from './cloudy.png';
import Sunny from './sunny.jpg';
import { cityDetails } from '../store/atoms/searchVal';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';


function WeatherCard() {

    const[cityValue, setCityValue] = useRecoilState(cityDetails);
    const[sevenDayWeather, setSevenDayWeather] = useState([]);
  
    useEffect(()=>{
      try{
        setSevenDayWeather(cityValue.data); //updates 7 day weather card array according to the new city
        console.log(sevenDayWeather);
        
        
      }catch(err){
  
      }
    },[cityValue])

  return (
    <div>
      <div className='weatherElement'>
      <div className='cityName'>
        {cityValue.city_name}, {cityValue.country_code}
      </div>
      <div className='dailyWeather'>
        {
            sevenDayWeather.map((city)=>{                               //daily weather card
              const cityTemp = Math.round(((city.temp)-32)*(5/9));
              return(
                <div key={city.value} className='dailyWeatherElement' 
                >
                  <div>
                  T: {cityTemp}°C
                  </div>
                  <br />
                  <div>
                    {(cityTemp>=25)? <img className='sunny' src={Sunny}/>:<img className='cloudy' src={Cloudy} />}
                  </div>
                  <br/>
                  <div className='wind'>
                    Wind Speed: {city.wind_spd}km/h
                  </div>
                  <div className='wind'>
                    Wind Dir: {city.wind_dir}°
                  </div>
                  </div>
                   )
                }) 
        }
      </div>
      </div>
    </div>
  )
}

export default WeatherCard
