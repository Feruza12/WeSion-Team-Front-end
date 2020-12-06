import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from '../SideDrawer/SideDrawer.js';

import DrawerContext from '../../context/drawer-context'
import Slide from '@material-ui/core/Slide';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: '#fff',
    color: '#020814',
    boxShadow: 'rgba(2, 8, 20, 0.06) 0px 1px 3px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  const drawer = useContext(DrawerContext);  

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer.open,
        })}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={drawer.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawer.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">WeSion</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer open={drawer.open} handleDrawerOpen={drawer.handleDrawerOpen} handleDrawerClose={drawer.handleDrawerClose}></Drawer>
    </React.Fragment>
  );
}