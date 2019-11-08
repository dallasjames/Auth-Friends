import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Signin from './signIn';
import { getToken } from './utils/server';
import Logout from './logout';
import Friends from './friends';
import AddFriend from './addFriend';
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
        {signedIn && <Link to='/addfriend'>Add Friends</Link>}
			</nav>

      <Route exact path='/signin' component={Signin} />
      <ProtectedRoute exact path='/friends' component={Friends} />
			<ProtectedRoute exact path='/logout' component={Logout} />
      <ProtectedRoute exact path='/addfriend' component={AddFriend} />
    </div>
  );
}

export default withRouter(App);
