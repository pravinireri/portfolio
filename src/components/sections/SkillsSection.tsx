import { useState } from "react";

interface Skill {
  name: string;
  category: "core" | "languages" | "infra" | "growing";
  note?: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    { name: "typescript", category: "languages", note: "my daily driver" },
    { name: "python", category: "languages", note: "for ml work" },
    { name: "go", category: "languages", note: "when performance matters" },
    { name: "postgresql", category: "core", note: "the database i trust" },
    { name: "redis", category: "core", note: "caching, queues, pub/sub" },
    { name: "node.js", category: "core", note: "backend runtime" },
    { name: "aws", category: "infra", note: "ec2, rds, lambda, s3" },
    { name: "docker", category: "infra", note: "containerization" },
    { name: "terraform", category: "infra", note: "infrastructure as code" },
    { name: "kubernetes", category: "growing", note: "still learning" },
    { name: "rust", category: "growing", note: "weekend experiments" },
    { name: "system design", category: "core", note: "my favorite interviews" },
  ];

  const categories = [
    { id: "core", label: "core" },
    { id: "languages", label: "languages" },
    { id: "infra", label: "infrastructure" },
    { id: "growing", label: "growing" },
  ];

  const filteredSkills = activeCategory 
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-section bg-surface-subtle">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <span className="section-label">skills & tools</span>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 text-caption font-mono rounded-sm transition-all duration-300 ${
              activeCategory === null 
                ? 'bg-foreground text-background' 
                : 'text-text-quiet hover:text-foreground border border-border'
            }`}
          >
            all
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-caption font-mono rounded-sm transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-foreground text-background' 
                  : 'text-text-quiet hover:text-foreground border border-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span 
                className={`inline-block px-4 py-2 text-small font-mono rounded-sm border transition-all duration-300 cursor-default ${
                  skill.category === 'growing' 
                    ? 'border-dashed border-text-whisper text-text-quiet' 
                    : 'border-border text-text-body hover:border-accent hover:text-foreground'
                }`}
              >
                {skill.name}
              </span>
              
              {/* Tooltip */}
              {skill.note && hoveredSkill === skill.name && (
                <div 
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-caption font-mono rounded-sm whitespace-nowrap z-10"
                  style={{
                    animation: 'fadeGentle 0.2s ease-out forwards',
                  }}
                >
                  {skill.note}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-small text-text-whisper mt-8 font-mono">
          dashed = actively learning • solid = comfortable
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
