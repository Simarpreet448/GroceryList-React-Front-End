import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

// React Component to prevent routing if not logged in

// RequiredRole can be: 
// null = allow all authenticated users
// role = allow only users with that role
const GuardedRoute = ({ component: Component, requiredRole, ...rest }) => {

    const { userCalled, loggedIn, role } = useSelector(store => store.user)

    return (
        !userCalled ?

            (<p>Waiting For User Role...</p>) :
            ((requiredRole === null && loggedIn) || (requiredRole === role && loggedIn) ?
                <Route
                    component={Component}
                    {...rest}
                /> :
                <Redirect to='/' />
            )


    )
}

export default GuardedRoute;