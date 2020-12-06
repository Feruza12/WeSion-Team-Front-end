import React from 'react';

import LoginComponent from '../../components/Login/LoginComponent/Login.js'
// import SloganComponent from '../../components/Login/SloganComponent/Slogan.js'


import Container from '@material-ui/core/Container';
import styles from './Login.module.css'
import Grid from '@material-ui/core/Grid';

function Login(props) {

  return (
    <React.Fragment>
      <div className={styles.AuthBlock}>
        <Container maxWidth="md">
          <div className={styles.block}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <LoginComponent />
              </Grid>
              {/* <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <SloganComponent />
              </Grid> */}
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Login;