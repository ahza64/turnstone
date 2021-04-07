import React, { useEffect, useState, useContext, createContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';

import NavBar from './navBar';
import IndexPages from './pages/index.js';

import './App.css';

// const history = useHistory();

const AppContext = createContext([{},() => {}]);
const initialState = {
  theme : window.localStorage.getItem('turnstoneTheme') || 'dark'
};

const AppProvider = props => {
  // state is the object (getter), setState is (function) setter
  const [state, setState] = useState({ ...initialState });
  console.log(state);

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

const Wrapper = () => {
  const [state] = React.useContext(AppContext);

  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <NavBar/>
      <RadioThemeToggle/>
      <IndexPages/>
    </Provider>
  )
}

const App = () => {
  return (
      <Router>
        <AppProvider>
          <Wrapper/>
        </AppProvider>
      </Router>
  );
}

render(<App />, document.querySelector('#root'));
