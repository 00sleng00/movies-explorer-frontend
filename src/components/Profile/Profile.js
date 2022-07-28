import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className="profile">
            <h2 className="profile__title">Привет, Роман!</h2>
            <form className="profile__form">
                <label className="profile__input">
                    Имя
                    <input
                        className="profile__input-item"
                        name="name"
                        type="text"
                        defaultValue="Роман"
                        placeholder="Имя"
                        required
                    />
                </label>
                <label className="profile__input">
                    E-mail
                    <input
                        className="profile__input-item"
                        name="email"
                        type="text"
                        defaultValue="mail@mail.ru"
                        placeholder="E-mail"
                        required
                    />
                </label>
                <button type="submit" className="profile__submit">
                    Редактировать
                </button>
            </form>
            <Link className="profile__logout" to="/">
                Выйти из аккаунта
            </Link>
        </div>
    )
}

export default Profile
