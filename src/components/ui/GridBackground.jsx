import { cn } from "../../lib/utils";

export function GridBackground({ className, children }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0 editorial-grid opacity-60 pointer-events-none"></div>
      
      {/* Corner crosshairs for technical feel */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ink/20 -translate-x-[1px] -translate-y-[1px]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-ink/20 translate-x-[1px] -translate-y-[1px]"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-ink/20 -translate-x-[1px] translate-y-[1px]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-ink/20 translate-x-[1px] translate-y-[1px]"></div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
