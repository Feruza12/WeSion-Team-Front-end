import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import styles from './Login.module.css'
import Grid from '@material-ui/core/Grid';
import Button from '../../UI/Buttons/Buttons';

export default function LoginComponent(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}

        validationSchema={Yup.object().shape({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required')
        })}

        onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
          let path = `/logs`;
          history.push(path);
        }}
      >
        {({ errors, status, touched, isSubmitting, dirty ,username, password}) => (
          <div className={styles.login}>
            <h1>Login </h1>
            <Form  >
              <Grid container direction="row" >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                  <div className={styles.formcontrol}>
                    <label className={styles.label} htmlFor="Username">Username</label>
                    <Field  label="Username" name="username" className={styles.inputField + (errors.username && touched.username ? ' isInvalid' : '')}  type="text" error={errors.username && touched.username} />
                    <ErrorMessage name="username" component="div" className={styles.invalidfeedback} />
                  </div>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className={styles.formcontrol}>
                    <label className={styles.label} htmlFor="Password">Password</label>
                    <Field  label="Password" name="password"className={styles.inputField + (errors.password && touched.password ? ' isInvalid' : '')}type="password" error={errors.password && touched.password} />
                    <ErrorMessage name="password" component="div" className={styles.invalidfeedback} />
                  </div>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Button type="submit" btnType="Yellow" disabled={!dirty || isSubmitting}>Login</Button>
                  {isSubmitting &&
                    <img alt="d" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                  {status &&
                    <div className={'alert alert-danger'}>{status}</div>
                  }
                </Grid>
              </Grid>
            </Form>
          </div>
        )}
      </Formik>
    </React.Fragment>
  )
}
