import './Input.css'

function Input({
    name,
    type,
    value,
    onChange,
    placeholder,
    minLength,
    maxLength,
    labelText,
    isValidInput,
    errorText,
}) {
    return (
        <label className="input">
            {labelText}
            <input
                className={
                    isValidInput
                        ? 'input__item'
                        : 'input__item input__item_errored'
                }
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                autoComplete="off"
                required
            />
            <span
                className={
                    isValidInput
                        ? 'input__error'
                        : 'input__error input__error_active'
                }
            >
                {errorText}
            </span>
        </label>
    )
}

export default Input
