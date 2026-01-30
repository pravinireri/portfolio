import { useState } from "react";

const NowSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { label: "building", value: "nest friends backend", detail: "distributed systems, api design" },
    { label: "leading", value: "engineering team", detail: "hiring, architecture decisions, code reviews" },
    { label: "learning", value: "what breaks at scale", detail: "the hard lessons only production teaches" },
  ];

  return (
    <section id="now" className="py-section">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <div className="md:ml-asymmetric">
          <span className="section-label">now</span>
          
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="group cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-caption font-mono text-accent uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="font-serif text-heading text-foreground lowercase">
                    {item.value}
                  </span>
                </div>
                
                <div 
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: hoveredIndex === index ? '40px' : '0px',
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <p className="text-small text-text-quiet pl-0 md:pl-20">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="accent-line mt-16" />
        </div>
      </div>
    </section>
  );
};

export default NowSection;
