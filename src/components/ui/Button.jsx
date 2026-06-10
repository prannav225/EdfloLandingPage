import { cn } from "../../lib/utils";

export function Button({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap rounded-xl cursor-pointer";
  
  const variants = {
    primary: "bg-ink text-canvas shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-ink/90",
    secondary: "bg-white text-ink border border-ink/20 shadow-sm hover:shadow hover:-translate-y-0.5 hover:border-ink/40",
    ghost: "bg-transparent text-ink hover:bg-ink/5",
    coral: "bg-coral text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-coral/90",
  };
  
  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
