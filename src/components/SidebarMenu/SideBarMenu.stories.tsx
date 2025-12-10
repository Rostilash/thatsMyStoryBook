import { menuLevel1, menuLevel2 } from "./Accorion/getAccordionArrays";
import { SideBarAccordion } from "./Accorion/SideBarAccordion";
import { SidebarMenu } from "./SidebarMenu";
import { useState } from "react";

export default {
  title: "Components/SideBar",
  component: SidebarMenu,
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

// === Default state ===
export const Default = (args: any) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Sidebar</button>

      <SidebarMenu
        {...args}
        isOpen={open}
        onClose={() => {
          setOpen(false);
          args.onClose?.();
        }}
      >
        <h2>Sidebar Default</h2>
        <p>We can put here any variant of blocks.</p>
      </SidebarMenu>
    </>
  );
};

//  === For 1 nested lvl ===
export const SimpleAccordion = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Sidebar</button>

      <SidebarMenu isOpen={open} onClose={() => setOpen(false)}>
        <h2> Simple Menu</h2>
        <SideBarAccordion items={menuLevel1} />
      </SidebarMenu>
    </>
  );
};

//  === For 2 nested lvl ===
export const NestedAccordion = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Sidebar</button>

      <SidebarMenu isOpen={open} onClose={() => setOpen(false)}>
        <h2>Nested Menu</h2>
        <SideBarAccordion items={menuLevel2} />
      </SidebarMenu>
    </>
  );
};
