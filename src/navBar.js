import React from 'react';
import { useHistory } from "react-router-dom";

const NavBar = () => {
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

export default NavBar;
