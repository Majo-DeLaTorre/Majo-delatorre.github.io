import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-black/10 focus:border-accent bg-white px-4 py-5 text-black placeholder:text-black/40 outline-none",
        className
      )}
      {...props} />
  );
}

export { Input }
