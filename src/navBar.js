import React from 'react';
import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { slide as Menu } from 'react-burger-menu'
import { useHistory } from "react-router-dom";


const NavButtonList = () => {
  return (
    <>
      <div><HomeButton/></div>
      <div><AboutButton/></div>
      <div><ContactButton/></div>
      <div><ProfessionalButton/></div>
      <div><InterestsButton/></div>
      <div><SocialButton/></div>
      <div><TruthButton/></div>
      <div><DreamsButton/></div>
    </>
  )
}

const NavBar = () => {
  const [ hamburgerOpen, setHamburgerOpen ] = useState(false);
  const handleHamburgerMenuClicked = () => {
    console.log("hello", hamburgerOpen);
    setHamburgerOpen(true);

  }
  return (
    <>
      <Menu className="hamburger" isOpen={false} menuClicked={handleHamburgerMenuClicked} >
        <NavButtonList/>
      </Menu>
      <nav className="navbar-wrapper">
        <NavButtonList />
      </nav>
    </>
  )
}


const HomeButton = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push("/");
  }
  return (
      <button type="button" onClick={handleHome}>Home</button>
  )
}

const AboutButton = () => {
  const history = useHistory();
  const handleAbout = () => {
    history.push("/about");
  }
  return (
      <button type="button" onClick={handleAbout}>About</button>
  )
}

const ContactButton = () => {
  const history = useHistory();
  const handleContact = () => {
    history.push("/contact");
  }
  return (
      <button type="button" onClick={handleContact}>Contact</button>
  )
}

const ProfessionalButton = () => {
  const history = useHistory();
  const handleProfessional = () => {
    history.push("/professional");
  }
  return (
      <button type="button" onClick={handleProfessional}>Professional</button>
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
