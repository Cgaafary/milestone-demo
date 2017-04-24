import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.renderUsers = this.renderUsers.bind(this);
        
    }

    renderUsers = (users) => (
        users.map(({id, firstName, lastName}) => (
            <Link key={id} to={`/user/${id}`}>
                <ListItem primaryText={`${firstName} ${lastName}`} />
            </Link>
            ))
    );

    render() {
        const { students } = this.props;
        
        return(
        <div>
            <h2>Choose a student</h2>
            <List>
                {this.renderUsers(students)}
            </List>
        </div>
        );
    }
}


export default StudentList;