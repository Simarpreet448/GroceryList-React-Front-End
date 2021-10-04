
//Redux store for cenetralized state management. reducers for setting state variables 
import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'

// User related actions
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userCalled: false,
        name: "Waiting for user...",
        email: "Please login to create a grocery list",
        role: null,
        loggedIn: false,
        registered: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.loggedIn = true
        },
        registrationSuccess: (state) => {
            state.registered = true
        },
        getUserFailure: (state, action) => {
            state.userCalled = true
        },
        getUserSuccess: (state, action) => {
            state.userCalled = true
            state.loggedIn = true
            state.name = action.payload.name
            state.email = action.payload.email
            state.role = action.payload.role
        },
        logoutSuccess: state => {
            state.name = "No user"
            state.email = "Please login to create a grocery list"
            state.role = null
            state.loggedIn = false
            state.registered = false
        },
    }
})

export const { loginSuccess, registrationSuccess, getUserSuccess, getUserFailure, logoutSuccess } = userSlice.actions


// combine slices/reducers here
const reducer = combineReducers({
    user: userSlice.reducer,
})


const store = configureStore({
    reducer: reducer,
})

export default store