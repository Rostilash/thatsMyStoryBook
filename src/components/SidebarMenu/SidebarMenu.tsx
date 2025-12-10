import { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SidebarMenu.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SidebarMenu = ({ children, isOpen, onClose }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.nav
            className={styles.sidebar}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              ✕
            </button>

            {children}
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
