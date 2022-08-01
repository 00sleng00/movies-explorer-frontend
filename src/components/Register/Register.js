import React, { useEffect, useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Register({ onRegister, isSuccess, isRequestSend, isInfoTooltipOpen, errorMessage }) {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isFormValid, setIsFormValid] = useState(false)
  const isDisabled = !isFormValid || !isRequestSend

  const handleChangeName = (e) => {
    if (!e.target.value.length) {
      setErrorName('Имя пользователя должно быть заполнено.')
    } else if (e.target.value.length < 2) {
      setErrorName('Имя пользователя должно быть не менее 2 символов.')
    } else if (e.target.value.length > 30) {
      setErrorName('Имя пользователя должно быть не более 30 символов.')
    } else {
      setErrorName('')
    }
    setName(e.target.value)
  }

  const handleChangePassword = (e) => {
    if (!e.target.value.length) {
      setErrorPassword('Имя пользователя должно быть заполнено.')
    } else {
      setErrorPassword('')
    }
    setPassword(e.target.value)
  }

  const handleChangeEmail = (e) => {
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(
      e.target.value
    )

    if (!e.target.value.length) {
      setErrorEmail('Электронная почта должна быть заполнена.')
    } else if (!validEmail) {
      setErrorEmail('Неверный формат электронной почты.')
    } else {
      setErrorEmail('')
    }
    setEmail(e.target.value)
  }

  const handleInputDisabled = () => {
    setIsInputDisabled(!isInputDisabled)
  }

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault()
    onRegister({ name, email, password })
    handleInputDisabled()
  }

  useEffect(() => {
    if (!name || !email || !password || errorName || errorPassword || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [errorName, errorEmail, errorPassword, name, email, password])

  return (
    <>
      <AuthForm
        onSubmit={handleSubmitRegisterForm}
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkCaption="Уже зарегистрированы?"
        linkText="Войти"
        linkPath="/signin"
        isDisabled={isDisabled}
      >
        <Input
          type="text"
          name="name"
          labelText="имя"
          value={name || ''}
          onChange={handleChangeName}
          placeholder="Имя"
          minLength={2}
          maxLength={30}
          errorText={errorName}
          disabled={!isInputDisabled}
          required
        />
        <Input
          type="email"
          name="email"
          labelText="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email || ''}
          onChange={handleChangeEmail}
          placeholder="mail@mail.ru"
          errorText={errorEmail}
          disabled={!isInputDisabled}
        />
        <Input
          type="password"
          name="password"
          labelText="password"
          value={password || ''}
          onChange={handleChangePassword}
          placeholder="********"
          errorText={errorPassword}
          disabled={!isInputDisabled}
        />
      </AuthForm>
      <InfoTooltip
        isSuccess={isSuccess}
        isInfoTooltipOpen={isInfoTooltipOpen}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default Register
