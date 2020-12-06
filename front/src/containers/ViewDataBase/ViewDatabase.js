import React from 'react';
import styles from './ViewDb.module.css';
import DataTable from '../../components/DataTable/DataTable'

export default function Logs() {
  return (
    <React.Fragment>
      <h1 className={styles.h1}>View Database</h1>
      <DataTable />
    </React.Fragment>
  );
}