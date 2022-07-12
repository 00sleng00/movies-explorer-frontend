import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <p className="filter-checkbox__caption">Короткометражки</p>
            <input className="filter-checkbox__checkbox" type="checkbox" />
        </div>
    )
}

export default FilterCheckbox
