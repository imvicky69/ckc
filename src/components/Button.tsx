"use client";
import React from "react";

export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  // If a btn- style is already in className, don't add btn-primary as a default
  const hasButtonStyle = className.includes("btn-");
  const finalClassName = `${hasButtonStyle ? "" : "btn-primary"} ${className}`.trim();
  
  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
