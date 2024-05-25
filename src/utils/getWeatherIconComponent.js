import { WiDaySunny, WiDayCloudy, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';
export const getWeatherIconComponent = (weatherDescription, size = "2x") => {
    switch (weatherDescription) {
      case 'clear sky':
        return <WiDaySunny size={size} />;
      case 'few clouds':
        return <WiDayCloudy size={size} />;
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        return <WiCloudy size={size} />;
      case 'shower rain':
      case 'rain':
        return <WiRain size={size} />;
      case 'thunderstorm':
        return <WiThunderstorm size={size} />;
      case 'snow':
        return <WiSnow size={size} />;
      case 'mist':
        return <WiFog size={size} />;
      default:
        return <WiDaySunny size={size} />;
    }
  };