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
}) {
    function handleSubmitForm(e) {
        e.preventDefault()
    }
    const isValid = true

    return (
        <div className="auth">
            <AuthFormHeader title={title} />
            <form className="auth-form" onSubmit={handleSubmitForm} noValidate>
                <div className="auth-form__inputs">{children}</div>
                <button
                    className={
                        isValid
                            ? 'auth-form__button'
                            : 'auth-form__button auth-form__button_inactive'
                    }
                >
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
