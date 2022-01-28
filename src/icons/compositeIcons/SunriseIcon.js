import React from 'react';
import { faSun,faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { createGraphicIcon } from '../Icons';

const Sun = createGraphicIcon(faSun) 
const ArrowUp = createGraphicIcon(faArrowUp)

const SunriseIcon = (props) => (
  <div className={props.className}>
    <svg viewBox="0 15 100 100">
      <ArrowUp x="33" y="15" width="33" height="40" />
      <svg y="20" x="15" height="70" width="70" className={styles.sun}>
        <Sun y="50%" />
      </svg>
      <line className={styles.horizon} x1="5" y1="95" x2="95" y2="95" />
    </svg>
  </div>
);

export default SunriseIcon;
