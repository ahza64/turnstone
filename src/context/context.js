import React, { useEffect, useState, useContext, createContext } from 'react';

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

export {AppContext};
export default AppProvider;
