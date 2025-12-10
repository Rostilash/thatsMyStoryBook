import { colors, type ToastColorVariants } from "./getToastBgColor";
import style from "./Toast.module.css";
import { useShowToast } from "./useShowToast";

interface ToastProps {
  message?: string;
  variant?: ToastColorVariants;
  duration?: number;
  onClose?: () => void;
}

export const Toast = ({ message = "", variant = "success", duration = 3000, onClose }: ToastProps) => {
  // Find color for Toaster
  const bgColor = colors[variant] || "#333";

  // Custom hook
  const { isVisible, showClass, setShowClass, setIsVisible } = useShowToast({ onClose, duration });

  if (!isVisible) return null;

  return (
    <div className={`${style.toast} ${showClass ? style.show : ""}`} style={{ backgroundColor: bgColor }}>
      <span>{message}</span>
      <button
        className={style.closeBtn}
        onClick={() => {
          setShowClass(false);
          setTimeout(() => {
            setIsVisible(false);
            onClose?.();
          }, 300);
        }}
      >
        ×
      </button>
    </div>
  );
};
