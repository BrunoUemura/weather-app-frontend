import { api } from "./api";

export async function getWeatherDetails(city: string | null) {
  try {
    return await api.get(`/weather?city=${city}`).then(({ data }) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
}
