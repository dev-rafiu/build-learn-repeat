import { ChangeEvent } from "react";

interface Props {
  type: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
}

function FormRow({ type, name, value, handleChange, labelText }: Props) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default FormRow;
