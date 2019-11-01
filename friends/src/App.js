import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Singin from './signIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
				<Link to="/">Home</Link>
				<Link to='/signin'>Sign In</Link>
				<Link to='/account'>My Account</Link>
				<Link to='/logout'>Log Out</Link>
			</nav>

      <Route exact path='/signin' component={Singin} />
    </div>
  );
}

export default withRouter(App);
