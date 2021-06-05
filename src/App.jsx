import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from 'routes';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Price from './pages/Price';
import Social from './components/Social';
import Header from './components/Header';
import Footer from './components/Footer';
import BackTop from './components/BackTop';

import './styles/global.scss';

const App = () => (
  <>
    <Social />
    <Header />
    <main>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.SERVICE} component={Service} />
        <Route path={routes.PRICE} component={Price} />
      </Switch>
    </main>
    <Footer />
    <BackTop />
  </>
);

export default App;
