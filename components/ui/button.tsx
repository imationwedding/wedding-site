import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
      {...props}
    >
      {children}
    </button>
  );
}
