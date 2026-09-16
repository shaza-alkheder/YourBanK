import './Select.css'
const Select = ({ input = {} }) => {
  return (
    <>
        <select
      className={input.classNameInput || ""}
      name={input.name}
      id={input.id}
      value={input.value ?? ""}
      onChange={input.onChange || undefined}
      disabled={input.readOnly ?? false}
      required={input.required ?? false}
    >
      {input.placeholderInput && (
        <option value="" disabled>
          {input.placeholderInput}
        </option>
      )}

      {input.options?.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
    </>
  )
}

export default Select
