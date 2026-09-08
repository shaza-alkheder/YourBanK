import "./Input.css"

const Input = ({input = {}}) => {
    return (

        <input type={input.typeInput} className={`O-A-inputRegister ${input.classNameInput || ""}`} placeholder={input.placeholderInput} name={input.name} id={input.id} value={input.value ?? ""}onChange={input.onChange || undefined} required/>

    )
}

export default Input