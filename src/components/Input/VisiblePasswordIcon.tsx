import style from "./Input.module.css";

export const VisiblePasswordIcon = ({ showPassword }: { showPassword: boolean }) => {
  return (
    <>
      {showPassword ? (
        // Visible password icon
        <img className={style.imageVisibility} src="visible_password.png" alt="password-hidden" />
      ) : (
        // Hidden password icon
        <img className={style.imageVisibility} src="hidden_password.png" alt="password-shown" />
      )}
    </>
  );
};
