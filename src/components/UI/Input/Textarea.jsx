import "./Textarea.css";

const Textarea = ({ input = {} }) => {
  return (
    <textarea
      className={input.classNameInput}
      placeholder={input.placeholderInput}
      name={input.name}
      id={input.id}
      value={input.value ?? ""}
      onChange={input.onChange || undefined}
      required={input.required ?? false}
      rows={input.rows || 5}
        readOnly={input.readOnly ?? false}
    />
  );
};

export default Textarea;