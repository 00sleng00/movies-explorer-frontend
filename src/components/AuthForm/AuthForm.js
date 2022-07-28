import React from 'react'
import { Link } from 'react-router-dom'
import AuthFormHeader from '../AuthFormHeader/AuthFormHeader'
import './AuthForm.css'

function AuthForm({
    children,
    title,
    buttonText,
    linkCaption,
    linkText,
    linkPath,
    onSubmit,
    isDisabled,
}) {
    return (
        <div className="auth">
            <AuthFormHeader title={title} />
            <form className="auth-form" onSubmit={onSubmit} noValidate>
                <div className="auth-form__inputs">{children}</div>
                <button disabled={isDisabled} className="auth-form__button">
                    {buttonText}
                </button>
                <div className="auth-form__link-content">
                    <p className="auth-form__link-caption">{linkCaption}</p>
                    <Link className="auth-form__link" to={linkPath}>
                        {linkText}
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AuthForm
