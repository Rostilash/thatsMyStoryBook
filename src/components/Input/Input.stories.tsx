import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

// === Default state ===
export const Text = () => <Input placeholder="Type something" />;

// === Visible password ===
export const VisiblePassword = () => <Input type="password" placeholder="enter your password" />;

// === Clearable state ===
export const Clearable = () => <Input clearable={true} placeholder="clearable" />;

// === AllVariants state ===
export const AllVariants = () => <Input type="password" clearable={true} placeholder="both" />;
