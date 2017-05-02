import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        localStorage.removeItem('token');
        this.props.handleSignOut();
        // this.props.history.replace("/");
    }

    render() {
            return (
                <div>
                    <Link to='/students'><button>Student List</button></Link>
                    <button onClick={this.handleSignOut}>Sign out</button>
                </div>
            );
    }
}

export default Header;