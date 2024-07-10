import { useEffect, useState } from "react";
export default function Input({ type, label, ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);

  return (
    <label className="  relative flex border bg-zinc-50 rounded-sm focus-within:border-gray-500 items-center ">
      <input
        type={inputType}
        required={true}
        className="  pt-3  w-full h-[40px]  outline-none peer text-sm pl-2 "
        {...props}
      />
      <small className=" absolute pointer-events-none cursor-text text-[12px] top-1/2 -translate-y-1/2 left-3 text-gray-600 transition-all peer-focus:text-[10px] peer-valid:text-[10px] peer-valid:top-3 peer-focus:top-3">
        {label}
      </small>
      {type === "password" && props.value && (
        <div
          type="button"
          onClick={() => setShow(!show)}
          className="h-full flex pr-2 cursor-pointer pl-3 text-gray-500 hover:text-gray-700 transition-all select-none  "
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}
