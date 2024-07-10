export default function Input({ label, ...props }) {
  return (
    <label className=" block relative">
      <input
        type="text"
        required={true}
        className=" border pt-3 bg-zinc-50  w-full h-[40px] rounded-sm outline-none peer text-sm pl-2 focus:border-gray-500"
        {...props}
      />
      <small className=" absolute pointer-events-none cursor-text text-[12px] top-1/2 -translate-y-1/2 left-3 text-gray-600 transition-all peer-focus:text-[10px] peer-valid:text-[10px] peer-valid:top-3 peer-focus:top-3">
        {label}
      </small>
    </label>
  );
}
