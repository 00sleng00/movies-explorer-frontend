import React, { useEffect, useState } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function Login({
  onLogin,
  isSuccess,
  isRequestSend,
  isInfoTooltipOpen,
  errorMessage,
}) {
  
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [isInputDisabled, setIsInputDisabled] = useState(true)
  const [isFormValid, setIsFormValid] = useState(false)
  const isDisabled = !isFormValid || !isRequestSend

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

  const handleSubmitLoginForm = (e) => {
    e.preventDefault()
    onLogin({ email, password })
    handleInputDisabled()
  }

  useEffect(() => {
    if (!email || !password || errorPassword || errorEmail) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [email, errorEmail, errorPassword, password])


  return (
    <>
      <AuthForm
        onSubmit={handleSubmitLoginForm}
        title="Рады видеть!"
        buttonText="Войти"
        linkCaption="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkPath="/signup"
        isDisabled={isDisabled}
      >
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

export default Login
