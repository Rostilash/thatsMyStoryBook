import { Toast } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    variant: { control: "select", options: ["success", "error", "info"] },
    duration: { control: "number" },
    onClose: { action: "closed" },
  },
};

// === Simple view ===
export const Info = (args: any) => <Toast {...args} />;
Info.args = {
  message: "Info message",
  variant: "info",
  duration: 5000,
};

// === Success ===
export const Success = (args: any) => <Toast {...args} />;
Success.args = {
  message: "Success!",
  variant: "success",
  duration: 3000,
};

// === Error ===
export const Error = (args: any) => <Toast {...args} />;
Error.args = {
  message: "Error!",
  variant: "error",
  duration: 4000,
};
