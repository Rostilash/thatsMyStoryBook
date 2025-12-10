import style from "./Input.module.css";
import { useState } from "react";
import { VisiblePasswordIcon } from "./VisiblePasswordIcon";

interface InputProps {
  type?: string;
  placeholder?: string;
  clearable?: boolean;
}

export const Input = ({ type = "text", placeholder = "", clearable = false }: InputProps) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = () => {
    setValue("");
  };

  // Check types
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  const both = isPassword && clearable === true;

  return (
    <div className={style.block}>
      {/* Main input */}
      <input type={inputType} value={value} placeholder=" " onChange={(e) => setValue(e.target.value)} className={style.input} />

      {/* Label */}
      <label className={style.label}>{placeholder}</label>

      {/* View Icons */}
      {isPassword && (
        <button className={style.showPasswordBtn} onClick={() => setShowPassword(!showPassword)}>
          <VisiblePasswordIcon showPassword={showPassword} />
        </button>
      )}

      {/* Clear Button */}
      {clearable && value && (
        <button className={style.clearValueBtn} onClick={handleClear} style={{ right: both ? "30px" : "" }}>
          ✕
        </button>
      )}
    </div>
  );
};
