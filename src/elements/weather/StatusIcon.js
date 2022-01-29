import React from 'react';
import {
  Unknown,
  Cloudy,
  Sunny,
  Fog,
  Moon,
  PartlyCloudy,
  PartlyCloudyNight,
  Thunder,
  Snow,
  Rain,
  Windy,
  Ice,
  Hail
} from '../../icons/WeatherIcons';

import styles from './statusIcon.css';

const weatherStatusToIconMap={
  dust_storm:Unknown,
  dust_whirls:Unknown,
  dust:Unknown,
  ice_crystals:Ice,
  ice_pellets:Ice,
  fog_mist:Fog,
  fog: Fog,
  smoke:Fog,
  volcanic_ash:Unknown,
  unknown:Unknown,
  funnel_cloud:Thunder,
  thunderstorms:Thunder,
  sand_storm:Unknown,
  sand:Unknown,
  snow:Snow,
  snow_pellets:Snow,
  snow_grains:Snow,
  drizzle:Rain,
  spray:Rain,
  rain:Rain,
  squalls:Windy,
  hail:Hail
}

const statusToIconMap = {
  Cloudy,
  Sunny,
  'Partly Cloudy': PartlyCloudy,
  Clear: Sunny,
  'Fog/Mist': Fog,
  'Haze': Fog
};
const nightStatusIconToMap = {
  ...statusToIconMap,
  Clear: Moon,
  'Partly Cloudy': PartlyCloudyNight,
};

const getIconFromStatus = (props) => {
  let Icon = props.isNight ? nightStatusIconToMap[props.status] : statusToIconMap[props.status];
  if(props.weather) {
    Icon = weatherStatusToIconMap[props.weather]
  }
 
  if (!Icon) {
    if (props.unknownIcon) {
      return <Unknown className={props.className} />;
    }
    return (
      <div className={styles.unknownIconContainer}>
        <div className={styles.unknownStatus}>{props.status}</div>
      </div>
    );
  }
  return <Icon className={props.className} />;
};

const StatusIcon = (props) => getIconFromStatus(props);

export default StatusIcon;
