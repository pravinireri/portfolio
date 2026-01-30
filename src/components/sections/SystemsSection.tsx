import { useState } from "react";

const SystemsSection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "simplicity",
      principle: "if i can't explain it, it's probably wrong.",
      detail: "complexity is debt. every abstraction should earn its place. i prefer systems a new engineer can understand in an afternoon.",
      code: `// bad: clever
data.reduce((a,b) => ({...a, [b.k]: [...(a[b.k]||[]), b]}), {})

// good: obvious  
const grouped = groupBy(data, 'category')`,
    },
    {
      title: "reliability",
      principle: "boring technology wins.",
      detail: "postgres over the new hotness. proven patterns over novel architectures. the best infrastructure is invisible.",
      code: `// i like this stack:
// - postgresql (it does more than you think)
// - redis (for the things postgres shouldn't do)
// - typescript (types catch bugs before users do)`,
    },
    {
      title: "ownership",
      principle: "the best code is the code you delete.",
      detail: "every line is a liability. i regularly audit what we don't need. unused features are silent complexity.",
      code: `// before: 2,400 lines
// after: 800 lines
// same functionality
// easier to change`,
    },
  ];

  return (
    <section id="systems" className="py-section bg-surface-subtle">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <span className="section-label">systems philosophy</span>
        
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
          {/* Navigation */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {philosophies.map((phil, index) => (
              <button
                key={phil.title}
                onClick={() => setActivePhilosophy(index)}
                className={`text-left px-4 py-3 rounded-sm transition-all duration-300 shrink-0 ${
                  activePhilosophy === index 
                    ? 'bg-foreground text-background' 
                    : 'text-text-quiet hover:text-foreground'
                }`}
              >
                <span className="font-serif text-subheading lowercase">{phil.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="font-serif text-heading text-foreground">
              {philosophies[activePhilosophy].principle}
            </p>
            <p className="text-body text-text-body">
              {philosophies[activePhilosophy].detail}
            </p>
            
            <pre className="bg-foreground text-background p-4 rounded-sm overflow-x-auto text-small font-mono">
              <code>{philosophies[activePhilosophy].code}</code>
            </pre>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-small text-text-whisper font-mono max-w-prose">
            i think about systems like gardens — they need regular pruning, not just new features.
            the goal is a codebase that feels smaller over time, not larger.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
