import React from 'react'
import { Route, Navigate } from 'react-router-dom'

function ProtectedRoute({ component: Component, ...props }) {
    return (
        <Route>
            {() =>
                props.loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="./signin" />
                )
            }
        </Route>
    )
}

export default ProtectedRoute
