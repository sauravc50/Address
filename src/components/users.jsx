import React, { Component } from 'react';
import axios from "axios";

class Users extends Component {
    state = { 
        users: [],
     };
    async componentDidMount() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        this.setState({users: response.data});
    } 
    render() { 
        return (
            <div>
            <table className="table table-success table-striped w-75 mx-auto mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>City</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user =>(
                        <tr>    
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
          );
    }
}
 
export default Users;