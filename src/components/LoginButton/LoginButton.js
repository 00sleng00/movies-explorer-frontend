import './LoginButton.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function LoginButton() {
    return (
        <Link
            className="login-button__link login-button__link_active"
            to="/signin"
        >
            <Button buttonText="Войти" />
        </Link>
    )
}

export default LoginButton
