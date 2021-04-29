import React, { useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider, defaultTheme} from '@adobe/react-spectrum';
import AppProvider, {AppContext} from "./context/context";

import NavBar from './navBar';
import IndexPages from './pages/index.js';

import './App.css';

const StylingWrapper = () => {
  const [state] = React.useContext(AppContext);
  // bring in adobe spectrum "Provider"
  return (
    <Provider theme={defaultTheme} colorScheme={state.theme}>
      <NavBar/>
      <IndexPages/>
    </Provider>
  )
}

// export default StylingWrapper;

const App = () => {
  // bring in custom hook for global state as "AppProvider" and react-router "Router"
  return (
    <AppProvider>
      <Router>
        <StylingWrapper/>
      </Router>
    </AppProvider>
  );
}

render(<App />, document.querySelector('#root'));
