import "./styles.scss";
import { useContext, useEffect } from "react";
import { CityContext } from "../../contexts/CityContext";
import ClearNight from "../../assets/night-clear.jpg";
import { getWeatherDetails } from "../../services/WeatherAPI";

export default function Weather() {
  const { city, setWeather } = useContext(CityContext);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getWeatherDetails(city);
  //     setWeather(data);
  //   })();
  // }, [city]);

  return (
    <div className="WeatherContainer">
      <h1>{city}</h1>
    </div>
  );
}
