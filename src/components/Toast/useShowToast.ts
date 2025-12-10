import { useState, useEffect } from "react";

export const useShowToast = ({ onClose, duration }: { onClose?: () => void; duration: number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showClass, setShowClass] = useState(false);

  useEffect(() => {
    setShowClass(true); // Animation Start

    const hideTimer = setTimeout(() => {
      setShowClass(false); // Animation Hide

      const removeTimer = setTimeout(() => {
        setIsVisible(false); // duration to remove from dom
        onClose?.();
      }, 300);

      return () => clearTimeout(removeTimer);
    }, duration);

    return () => clearTimeout(hideTimer);
  }, [duration, onClose]);

  return { isVisible, showClass, setShowClass, setIsVisible };
};
