import React from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Register(onSubmit) {
    const isValidInput = true

    return (
        <>
            <AuthForm
                onSubmit={onSubmit}
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                linkCaption="Уже зарегистрированы?"
                linkText="Войти"
                linkPath="/signin"
            >
                <Input
                    type="text"
                    name="name"
                    labelText="имя"
                    placeholder="Имя"
                    minLength={2}
                    maxLength={30}
                    isValidInput={isValidInput}
                />
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
                    // value={email || ""}
                    // onChange={handlePasswordChange}
                    placeholder="********"
                    isValidInput={!isValidInput}
                    errorText="Что-то пошло не так..."
                />
            </AuthForm>
            <InfoTooltip isSuccess={false} />
        </>
    )
}

export default Register
