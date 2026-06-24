import type { InputHTMLAttributes } from "react";
export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-md border border-[#e7eaf0] bg-white px-3 py-2 text-sm text-[#030303] outline-none placeholder:text-[#939393] focus:border-[#030303] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus:border-cyan-400 ${className}`}
      {...props}
    />
  );
}
