import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import FacultyOnly from './FacultyComponents/FacultyOnly';
import StudentsOnly from './StudentComponents/StudentsOnly';

const AuthenticatedUser = (props) => {
    const conditionallyRenderComponents = () => {
        const { currentUser } = props;
        const { userType } = currentUser;

        if (userType === "FACULTY") {
            return <FacultyOnly {...props} />
        }
        else {
            return <StudentsOnly />}
        }

    return (
        <div>
            <Route path="/" render={routeProps => <Header {...routeProps} {...props} />} />
            {conditionallyRenderComponents()}
        </div>
        );
}

export default AuthenticatedUser;
