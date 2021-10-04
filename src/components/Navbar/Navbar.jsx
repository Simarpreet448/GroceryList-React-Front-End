import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import accountImage from '../../images/3201525-200.png'
import { useSelector, useDispatch } from "react-redux";
import { attemptLogout } from '../../store/apiCalls'

function Navbar()
{
    let links
        const { loggedIn, email } = useSelector(store => store.user)
        const dispatch = useDispatch()

        if(!loggedIn)
        {
            links = (
                <div className="loginlogout">
                        <Link to="/login">Login</Link>/
                        <Link to="/register">Register</Link>
                </div>
                    )
        }
        else
        {
            links = (
                <div className="loginlogout">
                <Link to="/login" onClick={() => dispatch(attemptLogout())}>Logout</Link>
                </div>
            )
        }
        return (
            <div className="menu">
                <div><Link to="/todo" className="logo">Grocery List</Link></div>
                <div>{email}</div>
                <div className="account">
                    <img className="accountlogo" src={accountImage}></img><p>Account</p><i class="fa fa-arrow-down"></i>
                    <div className="accountoptions">
                            {links}
                    </div>
                </div>
            </div>
        );
    
}

export default Navbar;