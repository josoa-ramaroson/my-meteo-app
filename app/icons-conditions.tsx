import { ImageSourcePropType } from "react-native";
import { TWeatherCondition } from "./types";

const weatherImages: Record<TWeatherCondition, ImageSourcePropType> = {
    'clear night': require('./assets/clear.png'),
    'sunny day': require('./assets/sunny.png'),
    'partly cloudy day': require('./assets/partly_cloudy_day.png'),
    'partly cloudy night': require('./assets/partly_cloudy_night.png'),
    'cloudy day': require('./assets/cloudy.png'),
    'cloudy night': require('./assets/cloudy.png'),
    'overcast night': require('./assets/overcast.png'),
    'overcast day': require('./assets/overcast.png'),
    'mist night': require('./assets/mist.png'),
    'mist day': require('./assets/mist.png'),
    'fog night': require('./assets/fog.png'),
    'fog day': require('./assets/fog.png'),
    'lightRain day': require('./assets/light_rain.png'),
    'lightRain night': require('./assets/light_rain.png'),
    'rain day': require('./assets/rain.png'),
    'rain night': require('./assets/rain.png'),
    'thunderstorm night': require('./assets/thunderstorm.png'),
    'thunderstorm day': require('./assets/thunderstorm.png'),
    'snow day': require('./assets/snow.png'),
    'snow night': require('./assets/snow.png'),
    'hail day': require('./assets/hail.png'),
    'hail night': require('./assets/hail.png'),
    // 'Sleet': require('./assets/sleet.png'),
    'Wind': require('./assets/wind.png'), 
    // 'Haze': require('./assets/fog.png'),
    // 'Dust': require('./assets/dust.png'),
    // 'Sand': require('./assets/sand.png'),
    // 'Ash': require('./assets/sunny.png'),
    // 'Squalls': require('./assets/squalls.png'),
    'Tornado': require('./assets/tornado.png'),
    'default': require('./assets/thunderstorm_day.png')
};


export default weatherImages;
