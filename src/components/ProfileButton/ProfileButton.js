import './ProfileButton.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function ProfileButton(onClose) {
    return (
        <Link className="profile-button__link" to="/profile" onClick={onClose}>
            <Button buttonText="Аккаунт" />
        </Link>
    )
}

export default ProfileButton
