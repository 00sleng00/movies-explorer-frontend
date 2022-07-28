import React from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Login(onSubmit) {
    const isValidInput = true

    return (
        <>
            <AuthForm
                onSubmit={onSubmit}
                title="Рады видеть!"
                buttonText="Войти"
                linkCaption="Ещё не зарегистрированы?"
                linkText="Регистрация"
                linkPath="/signup"
            >
                <Input
                    type="email"
                    name="email"
                    labelText="E-mail"
                    placeholder="mail@mail.ru"
                    isValidInput={isValidInput}
                />
                <Input
                    type="password"
                    name="password"
                    labelText="password"
                    placeholder="********"
                    isValidInput={isValidInput}
                />
            </AuthForm>
            <InfoTooltip isSuccess={true} />
        </>
    )
}

export default Login
