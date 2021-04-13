import { BrowserRouter as Router } from "react-router-dom";

// import StylingWrapper  from "./index.js";

const App = () => {
  return (
      <Router>
        <AppProvider>
          <StylingWrapper/>
        </AppProvider>
      </Router>
  );
}

// render(<App />, document.querySelector('#root'));
