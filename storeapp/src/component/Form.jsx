import React from 'react';
import axios from 'axios';

//this is for submitting your app name. It will have an alert pop up box.

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}
  
export default  NameForm