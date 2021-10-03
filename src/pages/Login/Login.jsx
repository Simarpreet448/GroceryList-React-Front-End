import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { attemptLogin } from '../../store/apiCalls';
import './Login.css';


function Login() {

    const [formEmail, setFormEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const { loggedIn, userCalled } = useSelector(state => state.user)

    if (loggedIn && userCalled) {
        return <Redirect to='/' />
    }

    return (
            <form className="formcontainer" onSubmit={(e) => { e.preventDefault(); dispatch(attemptLogin(formEmail, password)) }}>
            <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" required onChange={e => setFormEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Sign in</button>
        </form>
    )
}

export default Login
