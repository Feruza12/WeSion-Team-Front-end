import React from 'react';
import styles from './Statistics.module.css';
import Map from '../../components/Map/Map';

export default function Statistics() {
  // const classes = useStyles();


  return (
    <React.Fragment>
      <h1 className={styles.h1}>Statistics</h1>
      <Map />
    </React.Fragment>
  );
}