// USE FOR STYLING MAIN PAGE

import React from "react";
import Navbar from "../../components/navbar";
import Layout from "../../components/layout";
// import Form from "../../component/Form";

import Store from "../../components/store";
import { FormGroup } from "reactstrap";

// import Store from "../../components/store";

export default function MainPage() {
  return (
    <div>
    <Layout title="">
      {/* <Store /> */}
      <div style={{backgroundImage: "url(https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden', 
      width: '100vw',
      height: '100vh',
      }}>
          {/* <div><h1>About Appquire</h1></div> */}
          <br/>
          <div>
          <br></br><br></br><br></br><br></br><br></br>
          <h1 style={{color:"white",textAlign:"center", fontSize:"50px"}} >Welcome to Appquire</h1>
          <h1 style={{color:"white",textAlign:"center", fontSize:"36px"}} >“The best place on the web to Appquire an App”! This app was designed to provide a platform  for all of the software developers out there who are trying to sell apps that they have created.  We came up with this idea because we are developers ourselves and wanted to work on something that could really be useful and meaningful to us and future aspiring devs.  Our team of developers are currently attending The Coding Boot Camp at UNC Charlotte and strive to give back to the tech community.  We hope you enjoy! -Appquire Dev Team</h1>
          </div>
          
      </div>
    </Layout>
    </div>
  );
}