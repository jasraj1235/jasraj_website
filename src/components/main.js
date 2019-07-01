import React from 'react';
import LandingPage from './landingpage';
import Resume from './resume';
import Home from './aboutme';
import Project from './projects';
import Contact from './contact';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component= {LandingPage} />
    <Route path="/resume" component= {Resume} />
    <Route path="/aboutme" component= {Home} />
    <Route path="/projects" component= {Project} />
    <Route path="/contact" component= {Contact} />
  </Switch>
)

export default Main;
