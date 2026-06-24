import type { SelectHTMLAttributes } from "react";
export function Select({ className = "", ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full rounded-md border border-[#e7eaf0] bg-white px-3 py-2 text-sm text-[#030303] outline-none focus:border-[#030303] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400 ${className}`}
      {...props}
    />
  );
}
