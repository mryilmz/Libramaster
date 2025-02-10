import React from 'react';
import Home from './pages/Home';
import Kitaplar from './pages/Kitaplar';
import Uyeler from './pages/Uyeler';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kitaplar" component={Kitaplar} />
        <Route path="/uyeler" component={Uyeler} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import Auth from './components/Auth';

function App() {
  return (
    <div>
      <h1>Libramaster</h1>
      <Auth />
    </div>
  );
}

export default App;