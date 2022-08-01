import './Profile.css'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import React, { useEffect, useState } from 'react'

function Profile({ onUpdateProfile, onLogout, message }) {
    const currentUser = React.useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [isInputDisabled, setIsInputDisabled] = useState(true)
    const [isFormValid, setIsFormValid] = useState(false)
    const [isMessage, setIsMessage] = useState(false)

    useEffect(() => {
        setName(currentUser.name)
        setEmail(currentUser.email)
    }, [currentUser])

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

    const handleSubmitProfileForm = (e) => {
        e.preventDefault()
        onUpdateProfile({ name, email })
        setIsMessage(true)
        handleInputDisabled()
    }

    useEffect(() => {
        const timer = setTimeout(() => setIsMessage(false), 3000)
        return () => clearTimeout(timer)
    })

    useEffect(() => {
        if (errorName || errorEmail) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [errorEmail, errorName])

    useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [currentUser.email, currentUser.name, email, name])

    return (
        <section className="profile">
            <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
            <form className="profile__form" onSubmit={handleSubmitProfileForm}>
                <label className="profile__input">
                    Имя
                    <input
                        className="profile__input-item"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        value={name || ''}
                        onChange={handleChangeName}
                        disabled={!isInputDisabled}
                    />
                    <span className="profile__error profile__error_active">
                        {errorName}
                    </span>
                </label>
                <label className="profile__input">
                    E-mail
                    <input
                        className="profile__input-item"
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        value={email || ''}
                        onChange={handleChangeEmail}
                        disabled={!isInputDisabled}
                    />
                    <span className="input__error input__error_active">
                        {errorEmail}
                    </span>
                </label>
                <span
                    className={
                        isMessage
                            ? 'profile-form__message profile-form__message_active'
                            : 'profile-form__message'
                    }
                >
                    {message}
                </span>
                <button
                    type="submit"
                    className="profile__submit"
                    disabled={!isFormValid || name < 2 || email < 2}
                    onClick={handleInputDisabled}
                >
                    Редактировать
                </button>
            </form>
            <Link className="profile__logout" to="/" onClick={onLogout}>
                Выйти из аккаунта
            </Link>
        </section>
    )
}

export default Profile
