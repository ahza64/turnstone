import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { useEffect, useState, useContext, createContext } from 'react';

import HomePage from './homePage';
import ContactMePage from './contactMePage';
import AboutMePage from './aboutMePage';
import DreamsPage from './dreamsPage';
import InterestsPage from './InterestsPage';
import ProfessionalPage from './professionalPage';
import SocialPage from './socialPage';
import TruthPage from './truthPage';
import NavBar from './navBar';

import './App.css';

// const history = useHistory();
const initialState = {
  theme : window.localStorage.getItem('turnstoneTheme') || 'dark'
};



const AppContext = createContext([{},() => {}]);

const AppProvider = props => {
  // state is the object (getter), setState is (function) setter
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    const map = { dark : 'light', light : 'dark' };
    if (document.body.classList.length === 0) {
      document.body.classList.add(state.theme);
    } else {
      document.body.classList.remove(map[state.theme]);
      document.body.classList.add(state.theme);
    }
  },[state.theme]);

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



const ThemeToggle = () => {
  const [state] = useContext(AppContext);
  const { toggleTheme } = useThemeToggle();

  return (
    <div>
      <button onClick={() => toggleTheme(state.theme)}>{state.theme}</button>
    </div>
  )
}


const App = () => {
  return (
    <Router>
    <AppProvider>
    <NavBar/>
    <ThemeToggle/>
        <div>
          <Switch>
            <Route path="/professional">
              <ProfessionalPage />
            </Route>
            <Route path="/interests">
              <InterestsPage />
            </Route>
            <Route path="/about">
              <AboutMePage />
            </Route>
            <Route path="/contact">
              <ContactMePage />
            </Route>
            <Route path="/social">
              <SocialPage />
            </Route>
            <Route path="/dreams">
              <DreamsPage />
            </Route>
            <Route path="/truth">
              <TruthPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
    </AppProvider>
    </Router>
  );
}



render(<App />, document.querySelector('#root'));
