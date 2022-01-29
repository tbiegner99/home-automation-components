import {faCloud,faSun,faMoon,faCloudSun,faCloudMoon,faCloudRain,faBolt,faSmog,faQuestion,faWind,faSnowflake,faIcicles,faCloudMeatball} from '@fortawesome/free-solid-svg-icons';
import { createIcon } from './Icons';

export const Cloudy = createIcon(faCloud);
export const Sunny = createIcon(faSun);
export const Moon = createIcon(faMoon);
export const MostlyCloudy = createIcon(faCloudSun);
export const PartlyCloudy = createIcon(faCloudSun);
export const PartlyCloudyNight = createIcon(faCloudMoon);
export const Rain = createIcon(faCloudRain);
export const Snow = createIcon(faSnowflake);
export const Windy = createIcon(faWind);
export const Thunder = createIcon(faBolt);
export const Fog = createIcon(faSmog);
export const Ice = createIcon(faIcicles);
export const Hail = createIcon(faCloudMeatball)

export const Unknown = createIcon(faQuestion);

export { SunsetIcon, SunriseIcon } from  './compositeIcons/SunriseIcon'; 