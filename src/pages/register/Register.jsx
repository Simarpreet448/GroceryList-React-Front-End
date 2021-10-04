import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { attemptRegister } from '../../store/apiCalls';

// Registration Page

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { registered } = useSelector(store => store.user)

    const submit = async (e) => {
        e.preventDefault()
        dispatch(attemptRegister(email, password))
    }

    if (registered) {
        return <Redirect to='/login' />
    }

    return (
        <form className="formcontainer" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Register
