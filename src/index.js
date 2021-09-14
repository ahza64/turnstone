import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./context/context";
import StylingWrapper from './app';

import './grid.css';
import './App.css';

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
