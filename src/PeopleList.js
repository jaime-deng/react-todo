import React from "react";
import axios from "axios"

export default class PeopleList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.setState({persons: res.data})
        })
    }

    render() {
        return (
            
            <ul>
                <h3>List of Names</h3>
                {this.state.persons.map(person => <li>{person.name}</li>)}
                <h3>List of Emails</h3>
                {this.state.persons.map(person => <li>{person.email}</li>)}
                <h3>List of Phone numbers</h3>
                {this.state.persons.map(person => <li>{person.phone}</li>)}
            </ul>
        )
    }
}