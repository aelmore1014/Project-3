// THIS PAGE HOLDS INFORMATION FOR THE NAVBAR. COMMENTED OUT SECTIONS ARE
// FOR EVENTUALLY ADDING NUMBERS TO THE CART COUNT BUT NOT WORKING CURRENTLY

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartContext from "../cart/context";
import logo from '../logo.jpg';
// import styled from 'style-component'


export default class Navbar extends Component {
    render() {
    // const cartCtx = useContext(CartContext);
    // const numItems = cartCtx.items.count;
        return (
        <nav className="navbar navbar-expand-sm bg-light navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="Appquire" style={{height:"55px", width:"60px"}} className="navbar-brand text-dark" />
            </Link>
            
            {/* <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5" > */}
            <Link to="/" className="nav-link text-dark">
                About Our Store
                </Link>
            <Link to="/products" className="nav-link text-dark">
                Apps For Sale
                </Link>
            {/* </li>
            </ul> */}
            <Link to="/Filesupload" className="ml-auto mr-2">
                <button className="btn btn-info">
                    <i className="fas fa-cart-plus"></i>
                    Upload App
                </button>
            </Link>
            <Link to="/view-cart" className="ml">
                <button className="btn btn-info">
                    <i className="fas fa-cart-plus"></i>
                    Cart 
                    {/* ({numItems}) */}
                </button>
            </Link>
            </nav>
        )
    }
}

// const ButtonContainer = style.button`
// text - transform: capitalize;
// `