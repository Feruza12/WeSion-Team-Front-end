import React, { useContext } from 'react';
// import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import DrawerContext from '../../context/drawer-context'
import Grid from '@material-ui/core/Grid';
// import styles from './MainContent.module.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    minHeight: '100vh'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));
export default function MainContent(props) {
  const classes = useStyles();
  const drawer = useContext(DrawerContext);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={clsx(classes.content, {
          [classes.contentShift]: drawer.open
        })}>
          <div className={classes.drawerHeader} />
          <Grid container direction="row" justify="center" >
            <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}