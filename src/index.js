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

const HomeButton = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
  }
  return (
    <div>
      <button type="button" onClick={handleHome}>Home</button>
    </div>
  )
}

const AboutButton = () => {
  const history = useHistory();
  const handleAbout = () => {
    history.push("/about");
  }
  return (
    <div>
      <button type="button" onClick={handleAbout}>About</button>
    </div>
  )
}

const ContactButton = () => {
  const history = useHistory();
  const handleContact = () => {
    history.push("/contact");
  }
  return (
    <div>
      <button type="button" onClick={handleContact}>Contact</button>
    </div>
  )
}

const ProfessionalButton = () => {
  const history = useHistory();
  const handleProfessional = () => {
    history.push("/professional");
  }
  return (
    <div>
      <button type="button" onClick={handleProfessional}>Professional</button>
    </div>
  )
}

const InterestsButton = () => {
  const history = useHistory();
  const handleInterests = () => {
    history.push("/interests");
  }
  return (
    <div>
      <button type="button" onClick={handleInterests}>Interests</button>
    </div>
  )
}

const SocialButton = () => {
  const history = useHistory();
  const handleSocial = () => {
    history.push("/social");
  }
  return (
    <div>
      <button type="button" onClick={handleSocial}>Social</button>
    </div>
  )
}

const TruthButton = () => {
  const history = useHistory();
  const handleTruth = () => {
    history.push("/truth");
  }
  return (
    <div>
      <button type="button" onClick={handleTruth}>Truth</button>
    </div>
  )
}

const DreamsButton = () => {
  const history = useHistory();
  const handleDreams = () => {
    history.push("/dreams");
  }
  return (
    <div>
      <button type="button" onClick={handleDreams}>Dreams</button>
    </div>
  )
}

const Nav = () => {
  return (
    <nav>
        <HomeButton/>
        <AboutButton/>
        <ContactButton/>
        <ProfessionalButton/>
        <InterestsButton/>
        <SocialButton/>
        <TruthButton/>
        <DreamsButton/>
    </nav>
  )
}

function Home() {
return (
  <div>
    <h2>Home</h2>
    <p>moving-throbbing symbol badass white mono cyberpunk symbol or boat gif, with link(s) to showcase project,if available</p>
    <p>spinning flying icons that flip on hover were were really really badass</p>
    <p>fade-in nav bar, OH! hover fade-in navbar!... i hate nav bars, but UI flow will take too long, this shit is fast and impressive, and i can always go back to UI updates</p>
  </div>
);
}

function AboutMe() {
return (
  <div>
    <h2>About Me</h2>
    <p>swoop in sky diving picture with css trasitions like the icons and throbbing on the home page</p>
    <p>this whole page is a joke, like we did in WDI, basic info list as a joke. hieght, weight, hair color, eye color, ...skin type, lol </p>
  </div>)
}

function Professional() {
return (
  <div>
    <h2>My Professionalism</h2>
    <p>slide show carrosel</p>
    <p>oyster farmer? really?</p>
  </div>
)
}

function Interests() {
return (
  <div>
    <h2>My Interests</h2>
    <p>short video clips? kitebording, flying, hang, scuba</p>
  </div>
)
}

function Social() {
  return (
    <div>
      <h2>My Social life</h2>
      <p>black, intense, heavy, rockerDOM feel</p>
      <p>bartending bar manager, imply relationship coaching</p>
      <p>sigma style, lone wolf, alpha bullies, empathy, cyberpunk integration?</p>
    </div>
  )
}

function Truth() {
return (
    <div>
      <h2>My Truth</h2>
      <p>there's a condition we all have, that can turn really bad if our thought patterns and/or biology aren't built for it. I care a lot bout things, and have to manage that because it can start a depression for myself.</p>
      <p>philiosiphy and "Loser Club"</p>
    </div>
  )
}

function Dreams() {
return (
  <div>
    <h2>My Dreams</h2>
    <p>gaming, game theory, gmae design, game archetecture.</p>
    <p>warhammer campaigns, building terrian, etc...</p>

  </div>
)
}

function ContactMe() {
return (
  <div>
    <h2>Contact Me</h2>
    <p>crashing icons. swoop in icons from the sides, as if they were to crash, then slow and stop and let them settle in the middle</p>

  </div>
)
}

const App = () => {
  return (
    <Router>
    <AppProvider>
    <Nav/>
    <ThemeToggle/>
        <div>
          <Switch>
            <Route path="/professional">
              <Professional />
            </Route>
            <Route path="/interests">
              <Interests />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/contact">
              <ContactMe />
            </Route>
            <Route path="/social">
              <Social />
            </Route>
            <Route path="/dreams">
              <Dreams />
            </Route>
            <Route path="/truth">
              <Truth />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </AppProvider>
    </Router>
  );
}



render(<App />, document.querySelector('#root'));
