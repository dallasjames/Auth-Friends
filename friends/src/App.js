import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Signin from './signIn';
import { getToken } from './utils/server';
import Logout from './logout';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  const signedIn = getToken()

  return (
    <div className="App">
      <nav className='nav'>
				{signedIn && <Link to="/">Home</Link>}
				{!signedIn && <Link to='/signin'>Sign In</Link>}
        {signedIn && <Link to='/friends'>Friends</Link>}
				{signedIn && <Link to='/logout'>Log Out</Link>}
			</nav>

      <Route exact path='/signin' component={Signin} />
      {/* <ProtectedRoute exact path='/account' component={Friends} /> */}
			<ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  );
}

export default withRouter(App);
