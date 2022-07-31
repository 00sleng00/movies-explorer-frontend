import React from 'react'
import './ProfileButton.css'
import { NavLink } from 'react-router-dom'

function ProfileButton({ onClose }) {
  return (
    <NavLink
      className="profile-button__link"
      to="/profile"
      onClick={onClose}>
      Аккаунт
    </NavLink>
  )
}

export default ProfileButton


