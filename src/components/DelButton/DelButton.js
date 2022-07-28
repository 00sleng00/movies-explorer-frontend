import './DelButton.css'

function DelButton({ onClick }) {
    return (
        <button
            type="button"
            className="movies-card__delete-button"
            onClick={onClick}
        ></button>
    )
}

export default DelButton
