import { Button } from "../ui/Button";

export function Navbar({ onOpenWaitlist }) {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="bg-white/80 backdrop-blur-md border border-ink/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] rounded-full pointer-events-auto flex items-center justify-between h-16 px-6 w-full max-w-5xl transition-all">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/Edflo-logo.svg" alt="Edflo" className="h-8" />
          <h2 className="text-xl font-medium flex items-baseline">
            Edflo<span className="w-1 h-1 bg-coral inline-block ml-[2px] rounded-[1px]"></span>
          </h2>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
          <a href="/#" className="hover:text-ink transition-colors">Home</a>
          <a href="/#problem" className="hover:text-ink transition-colors">Problem</a>
          <a href="/#ecosystem" className="hover:text-ink transition-colors">Platform</a>
          <a href="/#capabilities" className="hover:text-ink transition-colors">Capabilities</a>
          <a href="/#trust" className="hover:text-ink transition-colors">Trust</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="coral" size="sm" onClick={onOpenWaitlist}>
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
