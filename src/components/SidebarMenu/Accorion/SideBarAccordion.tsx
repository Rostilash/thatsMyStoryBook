import { useState } from "react";
import styles from "./SideBarAccordion.module.css";
import type { AccordionProps } from "./getAccordionArrays";

interface SBarAccordionProps {
  items: AccordionProps[];
}

export const SideBarAccordion = ({ items }: SBarAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className={styles.menuList}>
      {items.map((item) => (
        <li key={item.id}>
          <div className={styles.menuItem} onClick={() => item.children && toggle(item.id)}>
            {item.label}
            {item.children && <span className={styles.arrow}>{openId === item.id ? "▾" : "▸"}</span>}
          </div>

          {item.children && openId === item.id && (
            <ul className={styles.subMenu}>
              {item.children.map((sub) => (
                <li key={sub.id} className={styles.subMenuItem}>
                  {sub.label}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
