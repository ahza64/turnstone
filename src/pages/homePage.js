import React from 'react';
import samuri from './samuri.png';
import youngJustin from './youngJustin.jpg';
import oldJustin from './oldJustin.jpg';
import linkedinLogo from './Linkedin-Logo.png';
import { Link } from "react-router-dom";

const HomePage = () => {
return (
  <>
    <div id="main">
      <img id="main-img" src={samuri} />
    </div>
    <div className="container1">
      <div className="box1">
      <a href="/professional" style={{color: "white", textDecoration: "none"}}>
        <span></span>
        <div id="slot1" className="content1">
        <img id="slot1img" src={oldJustin} alt="slot1 image"/>
        Full stack web developer, consistently finding himself falling into leadership roles through building productive and motivated social workflows utilizing compassion, understanding and empathy to find compromise within a team when needed.
        With a background in HTML, CSS, Javascript, Node.js, MongoDB aggregation, and React/React Hooks, this multifaceted man will most likely add functionality you didn't expect. Full-stack is a balance between my passion for algorithm development on the back end and creating intuitive and aesthetically pleasing interaction on the front.
        Although design is not my priority, nor have I gone to school for it, I come from a family of creative types and have a lot of experience in the production of actual self-designed products. A family that always has projects going. Design comes like a second language. End-to-end design speciality with a new found focus on front end.
        </div>
      </a>
      </div>
    </div>
    <div className="container2">
      <div className="box2">
      <a href="/about" style={{color: "white", textDecoration: "none"}}>
        <span></span>
        <div id="slot2" className="content2">
        <img id="slot2img" src={youngJustin} alt="slot2 image"/>
          To quickly encapsulate the things I enjoyed and grew from in my childhood that impacts my adulthood and professionalism today. (Not to be too corporate, but…) let's take a look at easily relatable begginnings that lead to greater things; Star Wars, Ninja Turtles, and Legos. Being the philosopher I seem to have always been, older Star Wars lore had a great appeal to me and may have been the strongest influence on me to seeking truth and harmony in the nature of things and the beginnings of buddhism and later Western Philosophy to help me navigate the complexities of self and direction within the real tangible world we exsist in. Ninja Turtles was the beginning of what it means to me, to be a team player and sometimes challenge the brotherhood bond against ethics, morals and honor. Legos, on the other hand, had the greatest impact on my tangible professional career. I’ve always liked taking things apart and putting them back together. A computer’s hardware falls into these tangible things, but what a computer creates, the software, are just imaginary (digital) “things” you take apart and put back together, and ever since I wired up my first relay, I’ve been thoroughly enjoying it. It just took me a while to get over my “tough guy” mindset about needing to use my body to earn a living.
        </div>
      </a>
      </div>
    </div>
    <div className="container3">
      <div className="box3">
      <a href="/contact">

        <span></span>
        <div id="slot3" className="content3">

        <img id="slot3img" src={samuri} alt="slot2 image"/>
        <img id="slot2img" src={linkedinLogo} alt="slot2 image"/>
        </div>

      </a>
      </div>
    </div>
    {/*
    <h2>Home Page</h2>
    <p>moving-throbbing symbol badass white mono cyberpunk symbol or boat gif, with link(s) to showcase project,if available</p>
    <p>spinning flying icons that flip on hover were were really really badass</p>
    <p>fade-in nav bar, OH! hover fade-in navbar!... i hate nav bars, but UI flow will take too long, this shit is fast and impressive, and i can always go back to UI updates</p>
    */}
    </>
);
}

export default HomePage;
