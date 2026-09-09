import { useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/input";
import Textarea from "../../../UI/Input/Textarea";
import "./FormDashboard.css";

const FormDashboard = ({ fields = [], data = {}, onSubmit,  mode = "form",  image = "" }) => {
  const [formData, setFormData] = useState(data);
  const changeValue = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[name] = value;
      return newData;
    });
  };
  const submitBtn = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form className="S-K-form-dashboard" onSubmit={submitBtn}>
              {image && (
        <div className="S-K-Form-image">
          <img src={image} alt="Preview" />
        </div>
      )}
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.id}>{field.label}</label>
            {field.typeInput === "textarea" ? (
              <Textarea
                input={{
                  ...field,
                  value: formData[field.name],
                  onChange: changeValue,  
                   readOnly: mode === "view",

                }}
              />
            ) : (
              <Input
                input={{
                  ...field,
                  value: formData[field.name],
                  onChange: changeValue,
                    readOnly: mode === "view",
                }}
              />
            )}
          </div>
        ))}
        {mode !== "view" && (
        <Button
        className="S-K-Form-Submit"
        content="Save"
      />)}
      </form>
    </>
  );
};

export default FormDashboard;
