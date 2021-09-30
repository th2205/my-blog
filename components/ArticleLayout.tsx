import React from "react";

type Articlelayout = {
  children: React.ReactNode;
};

export default function Articlelayout({ children }) {
  return <div>{children}</div>;
}
