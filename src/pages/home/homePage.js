import React from 'react';
import samuri from './samuri.png';
import youngJustin from '../aboutMe/youngJustin.jpg';
import oldJustin from '../professional/oldJustin.jpg';
import linkedinLogo from '../contactMe/Linkedin-Logo.png';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProfessionalLink = () => {
  // const history = useHistory();
  // const handleProfessional = () => {
  //   history.push("/professional");
  //   window.scrollTo(0, 0);
  // }
  return (
      <Link to="/professional" style={{color: "white", textDecoration: "none"}}>
        <span></span>
        <div id="slot1" className="content1">
          <h2>
            Software Engineering Story
          </h2>
          <img id="slot1img" src={oldJustin} alt="slot1 image"/>
        </div>
      </Link>
  )
}

const AboutLink = () => {
  // const history = useHistory();
  // const handleAbout = () => {
  //   history.push("/about");
  //   window.scrollTo(0, 0);
  // }
  return (
      <Link to="/about" style={{color: "white", textDecoration: "none"}}>
        <span></span>
        <div id="slot2" className="content2">
          <img id="slot2img" src={youngJustin} alt="slot2 image"/>
          <h2>
            Personal Story
          </h2>
        </div>
      </Link>
  )
}

const ContactLink = () => {
  // const history = useHistory();
  // const handleContact = () => {
  //   history.push("/contact");
  //   window.scrollTo(0, 0);
  // }
  return (
      <Link to="/contact" style={{color: "white", textDecoration: "none"}}>
        <span></span>
        <div id="slot3" className="content3">
          <img id="slot3img" src={samuri} alt="slot2 image"/>
          <img id="slot2img" src={linkedinLogo} alt="slot2 image"/>
        </div>
      </Link>
  )
}

const HomePage = () => {
return (
  <div className='homeGrid'>
    <div id="main">
      <img id="main-img" src={samuri} />
    </div>
    <div className="container1">
      <div className="box1">
        <ProfessionalLink />
      </div>
    </div>
    <div className="container2">
      <div className="box2">
        <AboutLink />
      </div>
    </div>
    <div className="container3">
      <div className="box3">
        <ContactLink />
      </div>
    </div>
    {/*
    <h2>Home Page</h2>
    <p>moving-throbbing symbol badass white mono cyberpunk symbol or boat gif, with link(s) to showcase project,if available</p>
    <p>spinning flying icons that flip on hover were were really really badass</p>
    <p>fade-in nav bar, OH! hover fade-in navbar!... i hate nav bars, but UI flow will take too long, this shit is fast and impressive, and i can always go back to UI updates</p>
    */}
    </div>
);
}

export default HomePage;
