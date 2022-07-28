import './Button.css'

function Button({ buttonText, onClick }) {
    return <button className="button" onClick={onClick}>{buttonText}</button>
}

export default Button
