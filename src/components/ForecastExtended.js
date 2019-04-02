import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
import'./styles.css'




/* const days= [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]
const data = {
    temperature : 5,
    humidity:10,
    weatherState:'normal',
    wind:'normal'
} */

const api_key = "0cfec0dfe73cd74ccd35ce98f93bb9c1"
const url= "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component{

    constructor(){
        super()
        this.state = {forecastData : null}
    }
    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`
        fetch(url_forecast)
        .then(data=>data.json())
        .then(weather_data => {
            console.log(weather_data)
            const forecastData = transformForecast(weather_data)
            this.setState({forecastData})
        })
    }
    renderForecastItemDays(){
        return 'Render items'
        //return days.map(day => <ForecastItem weekDay = {day} data={data}></ForecastItem>)
    }
    renderProgres = ()=>{
        return 'cargando el pronostico extendido'
    }

    render(){
        const {city} = this.props
        const {forecastData} = this.state;
        return(
            <div>
                <h1 className='forecast-title'>{city}</h1>
                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgres()  
                }
            </div>
        )
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended