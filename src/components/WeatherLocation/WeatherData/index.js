import React from 'react'
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css'


import{
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    SUN,
    WINDY,
}from './../../../constants/weathers';


const WeatherData = ({data : {temperature, weatherState, humidity, wind}})=>(
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState = {weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
)
WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }
    )
}


export default WeatherData;