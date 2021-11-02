import React from 'react';
import yellowGraph from './wows/yellowGraph.png';
import spider from './wows/spider.png';
import fullDetail from './wows/fullDetail.png';
import removedMods from './wows/removedMods.png';
import reactionPage from './reaction/reactionPage.png';
import reducerPattern from './reaction/reducerPattern.png';
import reducerCode from './reaction/reducerCode.png';
import actionCode from './reaction/actionCode.png';

const ContactMePage = () => {
  return (
    <div id="projects" className="pageGrid wrapper">

      <h1 className="title">Projects</h1>

      <h3 className="projectTitle">1.) Reaction</h3>
      <a className="reactionImg" href="https://vibrant-darwin-54679b.netlify.app/"><img id="slot2img" src={reactionPage} alt="slot2 image"/></a>
      <a className="reactionImg" href="https://vibrant-darwin-54679b.netlify.app/"><img id="slot2img" src={reducerPattern} alt="slot2 image"/></a>
      <a className="reactionImg" href="https://vibrant-darwin-54679b.netlify.app/"><img id="slot2img" src={reducerCode} alt="slot2 image"/></a>
      <a className="reactionImg" href="https://vibrant-darwin-54679b.netlify.app/"><img id="slot2img" src={actionCode} alt="slot2 image"/></a>
      <div className="reactionText" >
        This project is the most advanced React project I've built with functional hooks. It focuses on understanding the state action -> reducer management design pattern and what one would typically see in enterprise software. The app also covers the typical (if not all) available hooks, including built custom hooks. There is no server or database, but the app is triple binding, using pubsub, which means, any users currently using the app, will see any new activity that others will add. I honestly look forward to building my next project and working on teams with this hooks.
      </div>

      <h3 className="projectTitle">2.) World of warships data visualisation</h3>
      <a className="wowsImg" href="https://wows-compare.herokuapp.com/"><img id="slot2img" src={yellowGraph} alt="slot2 image"/></a>
      <a className="wowsImg" href="https://wows-compare.herokuapp.com/"><img id="slot2img" src={spider} alt="slot2 image"/></a>
      <a className="wowsImg" href="https://wows-compare.herokuapp.com/"><img id="slot2img" src={fullDetail} alt="slot2 image"/></a>
      <a className="wowsImg" href="https://wows-compare.herokuapp.com/"><img id="slot2img" src={removedMods} alt="slot2 image"/></a>
      <div className="wowsText" >
        This project is a good representation of my current culmination of skills and strongest interests. I love charting “graphing” “data visualisation” “dataviz” front end, node.js and mongoDB technology. I’m a bigger fan of D3.js graphing package than Chart.js/API (that you can see here). But this project was/is actually more about the backend, and getting something useful up asap. D3 is object oriented, insane levels of customizable from the ground up, from scratch, it takes a long time to even set up a basic chart, and functional only due to a large, dedicated pool of programmers contributing to the framework,.. while Chart.js had 90% of the functionality i was looking for in this set-up package/API. The purpose of this app is to help a player of world of warships video game, decide which ships have the performance they’re looking for, compared to other ships, that are worth spending time and money on. The premise is more competitive focused, but the data should be basic enough even for more casual players. The data is pulled from the video game company’s open API, then aggregated and stored through and then in, in my mongo pipeline and database, so as to limit/eliminate aggregation in the server, and would send cleaner data to my front end, limiting unnecessary processes in higher level, more computational power consumption processes, especially on the client’s browser, or even the customer’s server, and mitigating everything on the faster-than data base as much as possible. I also really want to work in a backend pipeline. It’s very challenging for me, it’s the actual “control” of the data. But I had to get realistic about my sanity and liability based on education and experience background, and competition… same with video game development. So let’s build some React! This app is still is react OOP, but the subsequent apps are in functional react “hooks” Chart1, You can have up to three ship parameters present. All sorts of things I’ve calculated and put in, from total gun and single gun dpm, to turning radius and max speed and rudder shift. The graph will order things by choice of either ascending or descending of the first parameter. The following parameters will line up next to the first by ship that’s been ordered by the first parameter. Chart2 is a side by side comparison of two ships. I was expanding this graph to be customizable with choosable parameters, and how many, but there was a bigger problem I was working on… Chart3 is an individual ship’s parameters. There are things you can attach to the ship that will make it perform differently. This is a basic functionality, because max stats are what people really care about, and the first graph only shows “base” stats. I was in the middle of aggregating this very complex data, and working to store it as the default parameters, to the comparison graph was using the “upgrade modifications” to most of the ships. That’s when the game changed certain major things, that made me both quit the game for quite some time, as well as stop work on this project. Later, mongoLab, which hosts live mongoDB instances, got bought by Microsoft and then subsequently updated in such a fashion as to Legacy any other operational databases. The live data you see now, is simply default sample data that lives on the frontend. I’ve started playing the game again in a much lighter sense, but haven’t had as much interest in “giving” to this game as much anymore. I plan to make this app functional again, but it’s been shelved over mastering functional react hooks, which is currently my livelihood… But I’m very much open to strong junior roles in data viz.
      </div>

      {/*
        https://wows-compare.herokuapp.com/
      <p>crashing icons. swoop in icons from the sides, as if they were to crash, then slow and stop and let them settle in the middle</p>
      */}

    </div>
  )
}

export default ContactMePage;
