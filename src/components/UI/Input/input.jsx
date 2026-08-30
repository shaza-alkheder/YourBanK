import "./Input.css"

const Input = ({input = {}}) => {
    return (
        <input type={input.typeInput} className={input.classNameInput} placeholder={input.placeholderInput} name="input" />
    )
}

export default Input