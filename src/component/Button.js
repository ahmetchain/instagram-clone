import React from "react";

export default function Button({ type = "button", children, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className="w-full flex items-center justify-center mt-2 mb-3 disabled:bg-disabled bg-[#0095f6] rounded-lg gap-x-2 text-white font-medium pt-1.5 pb-1.5"
    >
      {children}
    </button>
  );
}
