import { useState } from "react";

const LogSection = () => {
  const [hoveredEntry, setHoveredEntry] = useState<number | null>(null);

  const entries = [
    {
      date: "jan 2026",
      note: "realized most bugs are communication failures.",
      context: "spent a week debugging what turned out to be a misunderstanding between two teams.",
    },
    {
      date: "dec 2025",
      note: "removed more code than i wrote. felt good.",
      context: "deleted 1,200 lines of 'just in case' code. nothing broke.",
    },
    {
      date: "nov 2025",
      note: "started saying no to features. harder than expected.",
      context: "every feature is a commitment. learning to protect the team's focus.",
    },
    {
      date: "oct 2025",
      note: "refactored the same thing three times. each time simpler.",
      context: "first version: 400 lines. final version: 80 lines. same behavior.",
    },
    {
      date: "sep 2025",
      note: "learned that documentation is just delayed thinking.",
      context: "if it's hard to document, the design is probably wrong.",
    },
    {
      date: "aug 2025",
      note: "hired someone smarter than me. best decision.",
      context: "the team improved faster when i stopped being the bottleneck.",
    },
    {
      date: "jul 2025",
      note: "first on-call rotation where nothing happened.",
      context: "boring is beautiful. systems should let you sleep.",
    },
  ];

  return (
    <section id="log" className="py-section">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <span className="section-label">ownership log</span>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-0">
            {entries.map((entry, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredEntry(index)}
                onMouseLeave={() => setHoveredEntry(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 py-4 md:py-5 cursor-default">
                  <span className="log-date shrink-0 w-16 text-right relative">
                    {entry.date}
                    {/* Timeline dot */}
                    <span 
                      className="absolute -right-[1.35rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border transition-all duration-300 hidden md:block"
                      style={{
                        backgroundColor: hoveredEntry === index ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                        transform: hoveredEntry === index ? 'translateY(-50%) scale(1.5)' : 'translateY(-50%) scale(1)',
                      }}
                    />
                  </span>
                  
                  <div className="flex-1 md:pl-6">
                    <p className="text-body text-text-body">
                      {entry.note}
                    </p>
                    
                    <div 
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: hoveredEntry === index ? '60px' : '0px',
                        opacity: hoveredEntry === index ? 1 : 0,
                      }}
                    >
                      <p className="text-small text-text-quiet mt-2 italic">
                        {entry.context}
                      </p>
                    </div>
                  </div>
                </div>
                
                {index < entries.length - 1 && (
                  <div className="border-b border-border/50 md:ml-[5.5rem]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="accent-line mt-12" />
      </div>
    </section>
  );
};

export default LogSection;
