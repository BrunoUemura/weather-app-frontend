import MorningCloudy from "../assets/morning/morning-cloudy.jpg";
import MorningRainy from "../assets/morning/morning-rainy.jpg";
import MorningSunny from "../assets/morning/morning-sunny.jpg";
import NightClear from "../assets/night/night-clear.jpg";

export function defineBackgroundImage(localTime: string, condition: string) {
  const currentTime = localTime.split(" ");
  let dayTime;

  const morningImages = {
    cloudy: MorningCloudy,
    rainy: MorningRainy,
    sunny: MorningSunny,
  };

  if (
    Number(currentTime[1].split(":")[0]) > 6 &&
    Number(currentTime[1].split(":")[0]) < 17
  ) {
    if (condition.includes("cloudy")) {
      return MorningCloudy;
    }
    if (condition.includes("rainy")) {
      return MorningRainy;
    }
    if (condition.includes("sunny")) {
      return MorningSunny;
    }
  } else if (
    Number(currentTime[1].split(":")[0]) > 17 &&
    Number(currentTime[1].split(":")[0]) < 19
  ) {
    if (condition.includes("cloudy")) {
      return MorningCloudy;
    }
  } else {
    if (condition.includes("cloudy")) {
      return NightClear;
    }
  }
}
