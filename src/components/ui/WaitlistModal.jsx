import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./Button";
import { useEffect } from "react";

export function WaitlistModal({ isOpen, onClose }) {
  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 bg-ink/40 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 lg:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="w-full max-w-lg bg-white border border-ink/5 rounded-xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-coral blur-[100px] opacity-[0.05] rounded-xl pointer-events-none"></div>
              
              {/* Widget Header */}
              <div className="flex items-center justify-between p-4 border-b border-ink/5 bg-white z-10 relative">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-ink/10"></div>
                  </div>
                  <div className="text-[10px] font-mono text-ink/40 uppercase tracking-widest border border-ink/10 px-2 py-0.5 rounded-full">
                    Req.Access
                  </div>
                </div>
                
                <button 
                  onClick={onClose}
                  className="p-1.5 text-ink/40 hover:text-ink hover:bg-canvas rounded-xl transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-coral/20 bg-coral/5 text-[10px] font-semibold uppercase tracking-widest text-coral">
                    <span className="w-1.5 h-1.5 rounded-[2px] bg-coral shadow-[0_0_8px_rgba(217,119,87,0.8)]"></span>
                    Beta Registration
                  </div>
                  <h2 className="text-2xl font-semibold text-ink tracking-tight mb-2">Join the Waitlist</h2>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    Be among the first to experience the new Campus Operating System. We are rolling out access in phases.
                  </p>
                </div>
                
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-coral/50 transition-all text-sm placeholder:text-ink/30 hover:bg-canvas/80"
                        placeholder="Jane Doe"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">Work Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-coral/50 transition-all text-sm placeholder:text-ink/30 hover:bg-canvas/80"
                        placeholder="jane@university.edu"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">Institution Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-coral/50 transition-all text-sm placeholder:text-ink/30 hover:bg-canvas/80"
                      placeholder="Example University"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-ink/50 uppercase tracking-widest">Your Role</label>
                    <div className="relative">
                      <select 
                        className="w-full px-4 py-3 bg-canvas/50 border border-ink/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-coral/50 transition-all text-sm appearance-none hover:bg-canvas/80 text-ink/80"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select your role...</option>
                        <option value="administration">Administration / Leadership</option>
                        <option value="faculty">Faculty</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-ink/40">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button variant="coral" className="w-full h-12 text-sm tracking-wide" type="submit">
                      Request Access
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
