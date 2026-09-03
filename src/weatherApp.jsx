import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./weatherInfo";

export default function WeatherApp(){

    const[weatherInfo, setWeatherInfo]=useState({
         city:"Delhi",
         temp: 10,
         tempMin: 25.0,
         tempMax: 24.0,
         humidity: 75.0,
         feelsLike: 25.2,
         weather: "Haze"
    })

    let updateInfo=(newinfo)=>{
       // console.log(newinfo);
        setWeatherInfo(newinfo);
    }
    return(

        <div>
            <h2>Weather App</h2>
             <SearchBox updateInfo={updateInfo}/>
             <WeatherInfo info={weatherInfo}/>
        </div>
    )
}