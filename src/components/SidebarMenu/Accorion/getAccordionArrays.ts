// Types for accordion
export interface subProps {
  id: number;
  label: string;
}

export interface AccordionProps {
  id: number;
  label: string;
  children?: subProps[];
}

// === For simple ===
export const menuLevel1: subProps[] = [
  { id: 1, label: "Dashboard" },
  { id: 2, label: "Profile" },
  { id: 3, label: "Settings" },
];

// === For nested ===
export const menuLevel2: AccordionProps[] = [
  {
    id: 1,
    label: "Dashboard",
  },
  {
    id: 2,
    label: "Users",
    children: [
      { id: 21, label: "All Users" },
      { id: 22, label: "Create User" },
      { id: 23, label: "User Roles" },
    ],
  },
  {
    id: 3,
    label: "Settings",
    children: [
      { id: 31, label: "General" },
      { id: 32, label: "Security" },
    ],
  },
];
