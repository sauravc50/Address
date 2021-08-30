import React, { Component } from "react";
import AddressService from "../services/AddressService";

class UpdateAddress extends Component {
  state = {
    address:{
        addressId: 0,
        address: "",
        city: "",
        country: "",
        pincode: "",
    },
  };

  componentDidMount() {
    AddressService.getAddressById(this.props.match.params.id).then((res) =>
      this.setState({ address: res.data })
    );
  }
  handleChange = (event) => {
    const address = { ...this.state.address };
    address[event.target.name] = event.target.value;
    //employee[empId]=1;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ address: address });
  };

  handleSubmit = (event) => {
    // Prevents default behaviour of submit button
    event.preventDefault();
    AddressService.updateAddress(this.state.address).then((res) => {
      this.props.history.push("/address");
    });
  };
  render() {
    return ( 
        <div className="mx-auto w-50 border p-3">   
        <h1>Update Address</h1> 
            <form onSubmit={this.handleSubmit}>
                    {/* <div className="mb-3 mt-2 text-start">
                        <label for="addressId">Address ID</label>
                        <input type="text" 
                        className="form-control" 
                        id="addressId" 
                        name="addressId"
                        disabled
                        value={this.state.address.addressId} 
                        onChange={this.handleChange}/>
                    </div> */}
                    <div className="mb-3 mt-2 text-start">
                        <label for="address">Address</label>
                        <input type="text"
                         className="form-control" 
                         id="address" 
                         name="address"
                         value={this.state.address.address} 
                         autoFocus 
                         placeholder="Enter Address"
                         onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3 mt-2 text-start">
                        <label for="city">City</label>
                        <input type="text" 
                        className="form-control" 
                        id="city" 
                        name="city"
                        value={this.state.address.city} 
                        placeholder="Enter City"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3 mt-2 text-start">
                        <label for="country">Country</label>
                        <input type="text" 
                        className="form-control" 
                        id="country" 
                        name="country"
                        value={this.state.address.country} 
                        placeholder="Enter Country"
                        onChange={this.handleChange}/>
                    </div>
                    <div className="mb-3 mt-2 text-start">
                        <label for="pincode">Pincode</label>
                        <input type="text" 
                        className="form-control" 
                        id="pincode" 
                        name="pincode"
                        value={this.state.address.pincode} 
                        placeholder="Enter Pincode"
                        onChange={this.handleChange}/>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
     );
}
}
export default UpdateAddress;   
