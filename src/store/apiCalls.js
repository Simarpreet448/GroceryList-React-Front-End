//Mik, Sam, Simarpreet - 23/08/2021
//for communication with the back end
import {
    loginSuccess,
    registrationSuccess,
    getUserSuccess,
    getUserFailure,
    logoutSuccess,
} from "./store"


// Calls to backend API
//local url for testing
//const baseUrl = "https://localhost:5001"
const baseUrl = "https://localhost:5001"


const attemptLogin = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/account/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        //mode: 'cors',
        body: JSON.stringify({ email, password })
    })

    let message = await response.json()

    if (response.ok) {
        dispatch(loginSuccess())

        dispatch(fetchUser())
    } else {
        alert(message.message)
    }
}



const attemptRegister = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/account/register`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    let message = await response.json()
    if (response.ok) {
        dispatch(registrationSuccess())
    } else {
        alert(message.message[0].description)
    }
}

const fetchUser = () => async dispatch => {
    const response = await fetch(`${baseUrl}/account/current`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    })
    const content = await response.json()


    if (content.name) {
        dispatch(getUserSuccess({
            name: content.name,
            email: content.email,
            role: content.role
        }))
    } else {
        dispatch(getUserFailure())
    }
}

const attemptLogout = () => async dispatch => {
    const response = await fetch(
        `${baseUrl}/account/logout`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        }
    )
    if (response.ok) {
        dispatch(logoutSuccess())
    }
}

const addTodo = (title) => { 

}

export {
    attemptLogin,
    attemptRegister,
    fetchUser,
    attemptLogout,
    addTodo,
}