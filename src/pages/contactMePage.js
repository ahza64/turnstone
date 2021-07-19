import React from 'react';
import linkedinLogo from './Linkedin-Logo.png';

const ContactMePage = () => {
return (
  <div className="page" style={{minHeight: "100em"}}>
    <h2>Contact Me</h2>
    <a href="https://www.linkedin.com/in/justinmichaelpettit"><img id="slot2img" src={linkedinLogo} alt="slot2 image"/></a>
    {/*
    <p>crashing icons. swoop in icons from the sides, as if they were to crash, then slow and stop and let them settle in the middle</p>
    */}

  </div>
)
}

export default ContactMePage;
