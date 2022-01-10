import React from 'react';
import StatusIcon from './StatusIcon';
import WindIcon from './WindIcon';
import styles from './weatherStatus.css';
import Utilities from '../../utils/Utilities';
import Units, {  getPreferredUnit } from '../../utils/Units';

const WeatherStatus = (props)=>{
  const { temperature, windSpeed, windDirection, units = {}, status } = props;
  const { Temperature: tempUnits = [Units.Temperature.CELCIUS] } = units;
  let convertedTemperature = '-';
  let unit = '';
  if (temperature) {
    unit = getPreferredUnit(temperature.unit, tempUnits);
    convertedTemperature = temperature.convertTo(unit).round();
  }
  return (
    <div className={styles.weatherStatus}>
      <div>
        <StatusIcon status={status} isNight={Utilities.isNight()} />
      </div>
      <div className={styles.temperature}>
        {convertedTemperature.value}&deg;{convertedTemperature.unit}
      </div>
      <div className={styles.windSpeed}>
        <WindIcon speed={windSpeed} angle={windDirection} units={units} />
      </div>
    </div>
  );
}

export default WeatherStatus;
