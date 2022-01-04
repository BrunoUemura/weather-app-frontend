import "./styles.scss";
import { useContext, useEffect } from "react";
import { CityContext } from "../../contexts/CityContext";
import ClearNight from "../../assets/night-clear.jpg";
import { getWeatherDetails } from "../../services/WeatherAPI";
import { IWeatherType } from "../../utils/IWeatherType";

export default function Weather(props: IWeatherType) {
  const { city, setWeather } = useContext(CityContext);

  return (
    <div className="WeatherContainer">
      <div className="WeatherLeftInfo">
        <h1>{props.temperatureInC}</h1>
      </div>

      <div className="WeatherRightInfo">
        <div className="WeatherRegionInfo">
          <h1>{`${props.name}, ${props.country}`}</h1>
          <h2>{props.localTime}</h2>
        </div>

        <div className="WeatherDetails">
          <h1>{props.condition}</h1>
          <p>Humiduty: {props.humidity}</p>
          <p>Feels like: {props.feelsLikeInC}</p>
        </div>
      </div>
      
    </div>
  );
}
