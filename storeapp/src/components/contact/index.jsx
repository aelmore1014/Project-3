import React, { Component } from 'react';
// import React, { Component } from './node_modules/react'
import {
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

export default class Contact extends Component {
    render() {
        return (


            <form>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label for="inputEmail4">Email</Label>
                        <Input type="email" id="inputEmail4" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label for="inputPassword4">Password</Label>
                        <Input type="password" id="inputPassword4" placeholder="Password" autoComplete="off" />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Label for="inputAddress">Address</Label>
                    <Input type="text" id="inputAddress" placeholder="1234 Main St" />
                </FormGroup>
                <FormGroup>
                    <Label for="inputAddress2">Address 2</Label>
                    <Input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </FormGroup>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label for="inputCity">City</Label>
                        <Input type="text" id="inputCity" />
                    </FormGroup>
                    <FormGroup className="col-md-4">
                        <Label for="inputState">State</Label>
                        <Input type="select" name="select" id="inputState" >
                            <option>Choose...</option>
                            <option>...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-2">
                        <Label for="inputZip">Zip</Label>
                        <Input type="text" id="inputZip" />
                    </FormGroup>
                </div>
                <FormGroup check>
                    <Label className="form-check-label">
                        <Input className="form-check-input" type="checkbox" value="" />
              Check me out
              <span className="form-check-sign">
                            <span className="check"></span>
                        </span>
                    </Label>
                </FormGroup>
                <Button type="submit" color="primary">Sign in</Button>
            </form>
        );
    };
}