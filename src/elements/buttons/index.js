import React from 'react';
import { Button } from '@tbiegner99/react-forms';
import combineClasses from 'classnames';
import styles from './index.css';

const createButton = (className) => (props) =>
  <Button {...props} className={combineClasses(styles.baseButton, className, props.className)} />;
export const PrimaryButton = createButton(styles.primaryButton);

export const SecondaryButton = createButton(styles.secondaryButton);

//export const PrimaryButton = Button;
