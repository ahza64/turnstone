import React, { useEffect, useState, useContext, createContext } from 'react';

const AppContext = createContext([{},() => {}]);

const InitialState = () => {

}

const AppProvider = props => {
  // console.log("window local storage", window.localStorage.getItem('turnstoneTheme'));
  let turnstoneTheme = window.localStorage.getItem('turnstoneTheme');
  if (!window.localStorage.getItem('turnstoneTheme')) {
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
  InitialState();

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
};

export {AppContext};
export default AppProvider;
