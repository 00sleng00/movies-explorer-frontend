import './MoreButton.css'
import Button from '../Button/Button'

function MoreButton({ onClick }) {
    return (
        <div className="more-button">
            <Button buttonText="Еще" onClick={onClick} />
        </div>
    )
}

export default MoreButton
