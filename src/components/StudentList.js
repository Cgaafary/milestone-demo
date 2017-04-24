import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Card } from 'material-ui/Card';
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
        <Card>
            <List>
                {this.renderUsers(students)}
            </List>
        </Card>
        );
    }
}


export default StudentList;