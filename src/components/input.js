import React from "react";
import { InputContainer } from "../styles/inputs";

export const Input = ({
  label,
  placeholder,
  helperText,
  error,
  value,
  defaultValue,
  startIcon,
  endIcon,
  colorIcon = "black",
  sizeIcon = "20",
  size,
  fullWidth,
  multiline,
  rows = "10",
  disabled,
  onChange,
  type = "text",
}) => {
  if (startIcon) {
    const Icons = require("react-icons/all");
    const IconComponent = Icons[startIcon];
    return (
      <InputContainer
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
      >
        <span>{label}</span>
        <div>
          <IconComponent
            color={colorIcon}
            size={sizeIcon}
            style={{ marginRight: "10px" }}
          />
          <input
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            readOnly={disabled}
            onChange={onChange}
            type={type}
          />
        </div>
        <span>{helperText}</span>
      </InputContainer>
    );
  }
  if (endIcon) {
    const Icons = require("react-icons/all");
    const IconComponent = Icons[endIcon];
    return (
      <InputContainer
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
      >
        <span>{label}</span>
        <div>
          <input
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            readOnly={disabled}
            onChange={onChange}
            type={type}
          />
          <IconComponent color={colorIcon} size={sizeIcon} />
        </div>
        <span>{helperText}</span>
      </InputContainer>
    );
  }
  if (multiline) {
    return (
      <InputContainer
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth={fullWidth}
        error={error}
        disabled={disabled}
      >
        <span>{label}</span>
        <div>
          <textarea
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            readOnly={disabled}
            onChange={onChange}
            rows={rows}
          ></textarea>
        </div>
        <span>{helperText}</span>
      </InputContainer>
    );
  }
  return (
    <InputContainer
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      error={error}
      disabled={disabled}
    >
      <span>{label}</span>
      <div>
        <input
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          readOnly={disabled}
          onChange={onChange}
          type={type}
        />
      </div>
      <span>{helperText}</span>
    </InputContainer>
  );
};
