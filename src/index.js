import React, { useEffect, useState, useContext, createContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider, defaultTheme, Button, Switch} from '@adobe/react-spectrum';

import NavBar from './navBar';
import IndexPages from './pages/index.js';

import './App.css';

const AppContext = createContext([{},() => {}]);

const AppProvider = props => {
  let turnstoneTheme = window.localStorage.getItem('turnstoneTheme');
  if (turnstoneTheme !== "light" || "dark") {
    window.localStorage.setItem('turnstoneTheme', "dark");
    turnstoneTheme = "dark";
  }
  const initialState = {
    theme : turnstoneTheme
  };
  // state is the object (getter), setState is (function) setter
  const [state, setState] = useState({ ...initialState });

  // useEffect(() => {
  //   const map = { dark : 'light', light : 'dark' };
  //   if (document.body.classList.length === 0) {
  //     document.body.classList.add(state.theme);
  //   } else {
  //     document.body.classList.remove(map[state.theme]);
  //     document.body.classList.add(state.theme);
  //   }
  // },[state.theme]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
};

const useThemeToggle = () => {
  const [state, setState] = useContext(AppContext);
  const toggleTheme = (theme) => {
    const map = { dark : 'light', light : 'dark' };
    // set it to local storage
    if (window.localStorage) {
      window.localStorage.setItem('turnstoneTheme', map[theme]);
    }
    setState(prevState => ({ ...prevState, theme : map[theme] }));
  };
  return {
    toggleTheme
  }
};

const RadioThemeToggle = () => {
  const [state] = useContext(AppContext);
  const { toggleTheme } = useThemeToggle();

  return (
    <div className="radio-button">
      <form>
        <fieldset>
          Dark
          <input
            value="dark"
            checked={state.theme === "dark"}
            type="radio"
            onChange={() => toggleTheme(state.theme)}
          />
          Light
          <input
            value="light"
            checked={state.theme === "light"}
            type="radio"
            onChange={() => toggleTheme(state.theme)}
          />
        </fieldset>
      </form>
    </div>
  );
}

const ThemeToggle = () => {
  // let [selected, setSelection] = React.useState(false);
  const [state] = useContext(AppContext);
  const { toggleTheme } = useThemeToggle();

  return (
    <Switch value={state.theme} isSelected={state.theme === "light"} onChange={() => toggleTheme(state.theme)}>
      Activate Lightmode
    </Switch>
  )
}

const StylingWrapper = () => {
  const [state] = React.useContext(AppContext);
  // bring in adobe spectrum "Provider"
  return (
    <Provider theme={defaultTheme} colorScheme={state.theme}>
      <NavBar/>
      <ThemeToggle/>
      <RadioThemeToggle/>
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
