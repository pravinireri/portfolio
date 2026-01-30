import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Project {
  company: string;
  role: string;
  period: string;
  problem: string;
  approach: string;
  impact: string;
  learned: string;
  broke?: string;
}

const WorkSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const projects: Project[] = [
    {
      company: "Nest Friends",
      role: "Engineering Lead",
      period: "2026 — present",
      problem: "scaling a social platform backend without the usual chaos.",
      approach: "keep the architecture boring. mongodb, nodejs, typescript. no microservices until absolutely necessary.",
      impact: "system handles 10x traffic with the same team size. deploys are uneventful (the best kind).",
      learned: "most scaling problems are organizational, not technical.",
      broke: "tried to optimize too early once. learned patience.",
    },
    {
      company: "Handshake",
      role: "AI Research",
      period: "2025 - 2026",
      problem: "language models fail in ways that are hard to detect.",
      approach: "built evaluation pipelines that catch silent failures. focus on edge cases.",
      impact: "reduced production incidents by 40%. team sleeps better.",
      learned: "ai systems need more skepticism, not more features.",
    },
    {
      company: "Code Ninjas",
      role: "Instructor",
      period: "2024",
      problem: "kids learn to code but not to think.",
      approach: "start with problems, not syntax. let them struggle productively.",
      impact: "students built projects they actually cared about.",
      learned: "teaching clarifies your own understanding. explaining is debugging.",
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-section">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <span className="section-label">work</span>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div 
              key={project.company}
              className="border border-border rounded-sm overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: expandedIndex === index ? 'hsl(var(--surface-subtle))' : 'transparent',
              }}
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                  <h3 className="font-serif text-heading text-foreground lowercase">
                    {project.company}
                  </h3>
                  <span className="text-small text-text-quiet">
                    {project.role}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-caption font-mono text-text-whisper hidden md:block">
                    {project.period}
                  </span>
                  <ChevronDown 
                    className="w-4 h-4 text-text-quiet transition-transform duration-300"
                    style={{
                      transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </div>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: expandedIndex === index ? '500px' : '0px',
                  opacity: expandedIndex === index ? 1 : 0,
                }}
              >
                <div className="px-6 pb-6 space-y-4">
                  <p className="text-caption font-mono text-text-whisper md:hidden">
                    {project.period}
                  </p>
                  
                  <div className="grid gap-4 md:gap-6">
                    <div>
                      <span className="text-caption font-mono text-accent uppercase tracking-wider">problem</span>
                      <p className="text-body text-text-body mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-caption font-mono text-accent uppercase tracking-wider">approach</span>
                      <p className="text-body text-text-body mt-1">{project.approach}</p>
                    </div>
                    <div>
                      <span className="text-caption font-mono text-accent uppercase tracking-wider">impact</span>
                      <p className="text-body text-text-body mt-1">{project.impact}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <p className="text-small text-text-quiet italic">
                      <span className="text-accent">what i learned:</span> {project.learned}
                    </p>
                    {project.broke && (
                      <p className="text-small text-text-whisper italic">
                        <span className="text-text-quiet">what broke:</span> {project.broke}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
