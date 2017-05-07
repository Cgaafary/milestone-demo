import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
   const { fullName, userType } = props.currentUser;
        if (userType === "FACULTY") {
            return (
                <div>
                    <Link to='/'><button>Student List</button></Link>
                    <button onClick={props.handleSignOut}>Sign out</button>
                    <p>Welcome {fullName}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={props.handleSignOut}>Sign out</button>
                    <p>Welcome {fullName}</p>
                </div>
            );
    }
}

export default Header;
