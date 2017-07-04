import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import { Home } from './components/home.jsx';
import { About } from './components/about.jsx';
import { Contact } from './components/contact.jsx';

const ACTIVE = { color: 'red' }

class App extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
          <li><Link to="about" activeStyle={ACTIVE}>About</Link></li>
          <li><Link to="contact" activeStyle={ACTIVE}>Contact</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
),
document.getElementById('app'));
