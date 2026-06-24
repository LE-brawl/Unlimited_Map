import type { ButtonHTMLAttributes } from "react";
export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-lg border border-[#e7eaf0] bg-white px-3 py-2 text-xs font-medium text-[#030303] transition hover:bg-[#f0f1f3] disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:bg-slate-700 ${className}`}
      {...props}
    />
  );
}
