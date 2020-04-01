import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
// import styled from 'style-component'




export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-sm bg-light navbar-dark px-sm-5">
            <Link to="/">
                <img alt="Appquire" className="navbar-brand text-dark" />
            </Link>
            
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5" >
                    <Link to="/products" className="nav-link text-dark">
                        Products
                        </Link>
                    </li>
            </ul>
            <Link to="/view-cart" className="ml-auto">
                <button className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i>
                    Cart
                </button>
            </Link>
            </nav>
        )
    }
}

// const ButtonContainer = style.button`
// text - transform: capitalize;
// `