import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from './homePage';
import ContactMePage from './contactMePage';
import AboutMePage from './aboutMePage';
import DreamsPage from './dreamsPage';
import InterestsPage from './interestsPage';
import ProfessionalPage from './professionalPage';
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
