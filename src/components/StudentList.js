import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import getStudents from '../data/queries/getStudents';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.renderUsers = this.renderUsers.bind(this);
        
        this.state = {
            students: []
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const { loading, allUsers } = nextProps.data;
        if (!loading) {
            this.setState({students: allUsers})
        }
    }

    renderUsers = (users) => (
        users.map(({id, fullName}) => (
            <Link key={id} to={`/user/${id}`}>
                <ListItem primaryText={fullName} />
            </Link>
            ))
    );

    render() {
        const { students } = this.state;
        
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


export default graphql(getStudents)(StudentList);