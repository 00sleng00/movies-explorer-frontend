import './BurgerMenuButton.css'
import burgerMenuIcon from '../../images/burger-menu-icon.svg'

function BurgerMenuButton({ isOpen, handleClick }) {
    return (
        <button
            type="button"
            className={
                !isOpen
                    ? 'burger-menu-button'
                    : 'burger-menu-button burger-menu-button_invisible'
            }
            onClick={handleClick}
        >
            <img
                className="burger-menu-icon"
                src={burgerMenuIcon}
                alt="Бургер Меню"
            />
        </button>
    )
}

export default BurgerMenuButton
