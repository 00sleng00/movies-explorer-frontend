import React from 'react'
import Logo from '../Logo/Logo'
import './AuthFormHeader.css'

function AuthFormHeader({ title }) {
    return (
        <div className="auth-form-header">
            <Logo />
            <h2 className="auth-form__title">{title}</h2>
        </div>
    )
}

export default AuthFormHeader
