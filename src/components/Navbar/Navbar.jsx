import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import accountImage from '../../images/3201525-200.png'
class Navbar extends Component {
    render() {
        return (
            <div className="menu">
                <div><Link className="logo">Grocery List</Link></div>
                <div className="account"><img className="accountlogo" src={accountImage}></img><p>Account</p></div>
            </div>
        );
    }
}

export default Navbar;