import React from 'react';
import axios from 'axios';

//this is for submitting your app name. It will have an alert pop up box.

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

const Forms = () => {
  return (
    <form>
      <FormGroup>
        <Label for="exampleEmail">Email address</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter email"
        />
        <FormText color="muted">
          We'll never share your email with anyone else.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
          autoComplete="off"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your App name was submitted: ' + this.state.value);
        event.preventDefault();
        let submit = { name: this.state.value }
        axios.post("http://localhost:4000/saveapp", submit)
        .then(res => { 
            console.log(res)
        })
    }
     
    render() {
      return (
        <form style={{width: "500px"}} onSubmit={this.handleSubmit}>
          <FormGroup>
          <Label>
              Name:
          </Label>
          <Input type="text" value={this.state.value} onChange={this.handleChange} />

            <Input type="submit" value="Submit" />
            </FormGroup>
        </form>
      );
    }
}
  
export default  NameForm