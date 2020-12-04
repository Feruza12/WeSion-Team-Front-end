import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Appbar from './components/Appbar/Appbar';
import MainContent from './containers/MainContent/MainContent';
import DrawerContext from './context/drawer-context';

import Logs from './containers/Logs/Logs'

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
              <Appbar />
              <MainContent>
                <Route exact path="/logs" component={Logs} />
                <Route exact path="/statistics" component={Logs} />
                    <Route exact path="/database" component={Logs} />
              </MainContent>
            </Switch>
          </BrowserRouter>
        </div>
      </DrawerContext.Provider>
    </React.Fragment>
  );
}

export default App;
