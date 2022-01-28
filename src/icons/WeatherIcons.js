import {faCloud,faSun,faMoon,faCloudSun,faCloudRain,faBolt,faSmog,faQuestion,faWind,faSnowflake} from '@fortawesome/free-solid-svg-icons';
import { createIcon } from './Icons';
import sunsetIcon from './compositeIcons/SunsetIcon';
import sunriseIcon from './compositeIcons/SunriseIcon';


export const Cloudy = createIcon(faCloud);
export const Sunny = createIcon(faSun);
export const Moon = createIcon(faMoon);
export const MostlyCloudy = createIcon(faCloudSun);
export const PartlyCloudy = createIcon(faCloudSun);
export const Rain = createIcon(faCloudRain);
export const Snow = createIcon(faSnowflake);
export const Windy = createIcon(faWind);
export const Thunder = createIcon(faBolt);
export const Fog = createIcon(faSmog);

export const Unknown = createIcon(faQuestion);

export const SunsetIcon = sunsetIcon;
export const SunriseIcon = sunriseIcon;