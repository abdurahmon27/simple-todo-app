import React from "react";

function MyButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export default MyButton;
