import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Appbar from './components/Appbar/Appbar';
import MainContent from './containers/MainContent/MainContent';
import DrawerContext from './context/drawer-context';

import Logs from './containers/Logs/Logs'
import Login from './containers/Login/Login'

import styles from './App.module.css'



function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <DrawerContext.Provider value={{ open: open, handleDrawerOpen: handleDrawerOpen, handleDrawerClose: handleDrawerClose }}>
        <div className={styles.flex}>
          <BrowserRouter basename={'/'}>
            <Switch>
              <Route exact path="/" render={() => <React.Fragment><Redirect to="/login" /> </React.Fragment>} />
              <Route exact path="/login" component={Login} />
              <React.Fragment>
                <Appbar />
                <MainContent>
                  <Switch>
                    <Route exact path="/logs" component={Logs} />
                    <Route exact path="/statistics" component={Logs} />
                    <Route exact path="/database" component={Logs} />
                  </Switch>
                </MainContent>
              </React.Fragment>
            </Switch>
          </BrowserRouter>
        </div>
      </DrawerContext.Provider>
    </React.Fragment>
  );
}

export default App;
