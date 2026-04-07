"use client";
import React from "react";

export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
}
