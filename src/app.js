import React, { useContext } from 'react';
import {Provider, defaultTheme} from '@adobe/react-spectrum';
import {AppContext} from "./context/context";

import NavBar from './navBar';
import IndexPages from './pages/index.js';

const StylingWrapper = () => {
  const [state] = React.useContext(AppContext);
  // bring in adobe spectrum "Provider"
  return (
    <Provider theme={defaultTheme} colorScheme={state.theme}>
      <div className='parentGrid'>
        <NavBar/>
        <IndexPages/>
      </div>
    </Provider>
  )
}

export default StylingWrapper;
