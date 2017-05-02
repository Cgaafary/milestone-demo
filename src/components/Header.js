import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div>
        <Link to='/students'><button>Student List</button></Link>
    </div>
    );
}

export default Header;