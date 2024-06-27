import { ImageSourcePropType } from "react-native"; 
import { TWeatherCard } from "./types";
// Define types for weather conditions

// Weather images object
const weatherCardImages: TWeatherCard = {
    precipitation: require('./assets/precipitation.png'),
    humidity: require('./assets/humidity.png'),
    'wind speed': require('./assets/wind_speed.png'),
    pressure: require('./assets/pressure.png'),
    uv: require('./assets/uvindex.png'),
    cloudcover: require('./assets/cloudcover.png'),
    mintmp: require('./assets/mintmp.png'),
    maxtmp: require('./assets/maxtmp.png'),
};

export {weatherCardImages}
