import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from './home/homePage';
import ContactMePage from './contactMe/contactMePage';
import AboutMePage from './aboutMe/aboutMePage';
import DreamsPage from './dreamsPage';
import InterestsPage from './interestsPage';
import ProfessionalPage from './professional/professionalPage';
import SocialPage from './socialPage';
import TruthPage from './truthPage';

const IndexPages = () => {
return (
  <div>
    <Switch>
      <Route path="/professional">
        <ProfessionalPage />
      </Route>
      <Route path="/interests">
        <InterestsPage />
      </Route>
      <Route path="/about">
        <AboutMePage />
      </Route>
      <Route path="/contact">
        <ContactMePage />
      </Route>
      <Route path="/social">
        <SocialPage />
      </Route>
      <Route path="/dreams">
        <DreamsPage />
      </Route>
      <Route path="/truth">
        <TruthPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);
}

export default IndexPages;
