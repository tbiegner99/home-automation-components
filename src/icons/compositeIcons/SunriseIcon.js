/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { faSun,faArrowUp,faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { createGraphicIcon } from '../Icons';
import styles from './sunriseIcon.css';

const Sun = createGraphicIcon(faSun) 
const ArrowUp = createGraphicIcon(faArrowUp)
const ArrowDown = createGraphicIcon(faArrowDown)

const BaseIcon = (props) => (
  <div className={props.className}>
    <svg viewBox="0 0 100 100">
      <svg x="25" y="0" width="50" height="45">{props.children}</svg>
      <svg y="18" x="15" height="70" width="70" viewBox="0 0 100 100" className={styles.sun}>
        <svg x="0" y="50" width="100" height="100"><Sun /></svg>
      </svg>
      <line className={styles.horizon} x1="5" y1="95" x2="95" y2="95" />
    </svg>
  </div>);

export const SunriseIcon = (props)=><BaseIcon {...props}><ArrowUp/></BaseIcon>
export const SunsetIcon = (props)=><BaseIcon {...props}><ArrowDown/></BaseIcon>

