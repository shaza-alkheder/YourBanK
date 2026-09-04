import "./Input.css"

const Input = ({input = {}}) => {
    return (
        <input type={input.typeInput} className={input.classNameInput} placeholder={input.placeholderInput} name={input.name} id={input.id} required/>
    )
}

export default Input