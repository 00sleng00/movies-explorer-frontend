import './BurgerMenuButton.css'


function BurgerMenuButton({ isOpen, handleClick }) {

  return (
    <button
      type="button"
      className={`burger-menu-button burger-menu-button_${isOpen  ? 'on' : 'off'
        }`}
      onClick={handleClick}

    >
      <span></span>
    </button >
  )
}

export default BurgerMenuButton
