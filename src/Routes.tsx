import React from 'react';
import { Route, Switch } from 'react-router';
import { About } from './Pages/About';
import { Beers } from './Pages/Beers';
import { Home } from './Pages/Home';
import { News } from './Pages/News';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/beers">
        <Beers />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};
