import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md placeholder:text-black/40  field-sizing-content bg-white px-3 py-2 outline-none focus-visible:ring-[1px] focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 text-md",
        className
      )}
      {...props} />
  );
}

export { Textarea }
