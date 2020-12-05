import React from 'react';
import styles from './Logs.module.css';
import Card from '../../components/Card/Card'

export default function Logs() {
  return (
    <React.Fragment>
      <h1 className={styles.h1}>Logs</h1>
      <Card />
      <Card />
      <Card />
    </React.Fragment>
  );
}