import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignIn from './SignIn';

const Public = (props) => {
    return (
        <div>
          <Link to="/signin"><button>Sign In</button></Link>
          <Route path="/signin" render={routeProps => <SignIn {...routeProps} {...props}/>} />
        </div>
    );
}

export default Public;
