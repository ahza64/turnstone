import React from 'react';
import { useState, useContext } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { slide as Menu } from 'react-burger-menu'
import { useHistory } from "react-router-dom";
import {Switch} from '@adobe/react-spectrum';

import useThemeToggle from './hooks/useThemeToggle';
import {AppContext} from "./context/context";

const ThemeToggle = () => {
  const [state] = useContext(AppContext);
  const { toggleTheme } = useThemeToggle();
  return (
    <Switch value={state.theme} isSelected={state.theme === "light"} onChange={() => toggleTheme(state.theme)}>
      switch from {state.theme}mode
    </Switch>
  )
}

const NavBar = () => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState(false);
  const handleHamburgerMenuClicked = () => {
    setHamburgerOpen(true);
  }
  return (
    <>
      <Menu className="hamburger" isOpen={false} menuClicked={handleHamburgerMenuClicked} >
        <NavButtonList/>
      </Menu>
      <nav className="navbar-wrapper">
        <ThemeToggle />
        <NavButtonList />
      </nav>
    </>
  )
}

const NavButtonList = () => {
  return (
    <>
    <div><HomeButton/></div>
    <div><ProfessionalButton/></div>
    <div><AboutButton/></div>
    <div><ContactButton/></div>
    <div><ProjectsButton/></div>
    </>
  )
}

const HomeButton = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
    window.scrollTo(0, 0);
  }
  return (
      <button type="button" onClick={handleHome}>Home</button>
  )
}

const AboutButton = () => {
  const history = useHistory();
  const handleAbout = () => {
    history.push("/about");
    window.scrollTo(0, 0);
  }
  return (
      <button type="button" onClick={handleAbout}>About</button>
  )
}

const ContactButton = () => {
  const history = useHistory();
  const handleContact = () => {
    history.push("/contact");
    window.scrollTo(0, 0);
  }
  return (
      <button type="button" onClick={handleContact}>Contact</button>
  )
}

const ProfessionalButton = () => {
  const history = useHistory();
  const handleProfessional = () => {
    history.push("/professional");
    window.scrollTo(0, 0);
  }
  return (
      <button type="button" onClick={handleProfessional}>Professional</button>
  )
}

const ProjectsButton = () => {
  const history = useHistory();
  const handleProjects = () => {
    history.push("/projects");
  }
  return (
      <button type="button" onClick={handleProjects}>Projects</button>
  )
}

const InterestsButton = () => {
  const history = useHistory();
  const handleInterests = () => {
    history.push("/interests");
  }
  return (
      <button type="button" onClick={handleInterests}>Interests</button>
  )
}

const SocialButton = () => {
  const history = useHistory();
  const handleSocial = () => {
    history.push("/social");
  }
  return (
      <button type="button" onClick={handleSocial}>Social</button>
  )
}

const TruthButton = () => {
  const history = useHistory();
  const handleTruth = () => {
    history.push("/truth");
  }
  return (
      <button type="button" onClick={handleTruth}>Truth</button>
  )
}

const DreamsButton = () => {
  const history = useHistory();
  const handleDreams = () => {
    history.push("/dreams");
  }
  return (
      <button type="button" onClick={handleDreams}>Dreams</button>
  )
}

export default NavBar;
