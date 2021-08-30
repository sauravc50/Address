import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddressTable extends Component {
    render() { 
        return ( <table className="table table-success table-striped w-75 mx-auto mt-3">
        <thead>
            <tr>
            <th>Address ID</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {this.props.addresses.map(address => (
                <tr>
                    <td>{address.addressId}</td>
                    <td>{address.address}</td>
                    <td>{address.city}</td>
                    <td>{address.country}</td>
                    <td>{address.pincode}</td>
                    <td>
                        <Link to={`/address/update/${address.addressId}`}>
                        <input type="button"
                        className="btn btn-primary"
                        value="Update"

                        />
                        </Link>
                        <input type="button"
                        className="btn btn-secondary ms-1"
                        value="Delete"
                        onClick={() => this.props.handleDelete(address.addressId)}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table> );
    }
}
 
export default AddressTable;