import React from 'react';
import samuri from './samuri.png'

const HomePage = () => {
return (
  <>
    <div id="main">
      <img id="main-img" src={samuri} />
    </div>
    <div className="container1">
      <div className="box1">
        <span></span>
        <div id="slot1" className="content1">
          content words slot 1
          about me
          <img id="slot1img" src={samuri} alt="slot1 image"/>
        </div>
      </div>
    </div>
    <div className="container2">
      <div className="box2">
        <span></span>
        <div id="slot2" className="content2">
          content words slot 2
          professional history
          <img id="slot2img" src={samuri} alt="slot2 image"/>
        </div>
      </div>
    </div>
    <div className="container3">
      <div className="box3">
        <span></span>
        <div id="slot3" className="content3">
          content words slot 3
          contact me
          <img id="slot3img" src={samuri} alt="slot2 image"/>
        </div>
      </div>
    </div>
    <h2>Home Page</h2>
    <p>moving-throbbing symbol badass white mono cyberpunk symbol or boat gif, with link(s) to showcase project,if available</p>
    <p>spinning flying icons that flip on hover were were really really badass</p>
    <p>fade-in nav bar, OH! hover fade-in navbar!... i hate nav bars, but UI flow will take too long, this shit is fast and impressive, and i can always go back to UI updates</p>
  </>
);
}

export default HomePage;
