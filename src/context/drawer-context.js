import React from 'react'

const drawerContext = React.createContext({ open: false, handleDrawerOpen: () => { }, handleDrawerClose: () => { } });

export default drawerContext;