import { useState, useEffect } from "react";

const HeaderSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="min-h-[85vh] flex items-end pb-20 md:pb-32 relative">
      {/* Subtle background accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1.5s ease-out' }}
      />
      
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0 relative z-10">
        <div 
          className="space-y-8"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="space-y-2">
            <p className="text-caption font-mono text-text-whisper tracking-widest uppercase">
              software engineer
            </p>
            <h1 className="font-serif text-display text-foreground lowercase">
              pravin ireri
            </h1>
          </div>
          
          <p className="text-subheading text-text-quiet max-w-prose-narrow leading-relaxed">
            i build backend systems that are boring and reliable.
            <br />
            <span className="text-text-whisper">currently leading engineering at nest friends.</span>
          </p>

          <div className="flex items-center gap-4 pt-4">
            <div className="accent-line" />
            <span className="text-caption font-mono text-text-whisper">
              scroll to explore
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
