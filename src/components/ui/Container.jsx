import { cn } from "../../lib/utils";

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto max-w-6xl px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
