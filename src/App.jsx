import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'routes';
import Home from './pages/Home';
import About from './pages/About';
import Social from './components/Social';
import Header from './components/Header';
import Footer from './components/Footer';
import BackTop from './components/BackTop';

import './styles/global.scss';

const App = () => (
  <>
    <Social />
    <Header />
    <Switch>
      <Route path={routes.HOME} exact component={Home} />
      <Route path={routes.ABOUT} component={About} />
    </Switch>
    <Footer />
    <BackTop />
  </>
);

export default App;
