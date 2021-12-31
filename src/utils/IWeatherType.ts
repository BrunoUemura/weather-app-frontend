export type IWeatherType = {
  name: string;
  region: string;
  country: string;
  localTime: string;
  temperatureInC: number;
  temperatureInF: number;
  feelsLikeInC: number;
  feelsLikeInF: number;
  condition: string;
  humidity: number;
  forecast: Forecast[];
};

type Forecast = {
  date: string;
  maxTemperatureInC: number;
  maxTemperatureInF: number;
  minTemperatureInC: number;
  minTemperatureInF: number;
  avgTemperatureInC: number;
  avgTemperatureInf: number;
  condition: {
    text: string;
    icon: string;
  };
};
