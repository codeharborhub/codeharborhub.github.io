import React, { useState } from "react";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
}

export default function PasswordInput({
  id,
  label,
  value,
  onChange,
  autoComplete = "current-password",
  placeholder = "Enter password",
  required = true,
  hint,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="chh-field">
      <label className="chh-label" htmlFor={id}>{label}</label>
      <div className="chh-password-control">
        <input
          id={id}
          className="chh-input"
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          minLength={8}
          maxLength={128}
          required={required}
        />
        <button
          type="button"
          className="chh-password-toggle"
          onClick={() => setVisible((state) => !state)}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {hint ? <small className="chh-field-hint">{hint}</small> : null}
    </div>
  );
}
