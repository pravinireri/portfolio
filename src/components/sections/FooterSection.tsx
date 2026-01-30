import { useState } from "react";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const FooterSection = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { 
      id: "email", 
      label: "email", 
      href: "mailto:hello@pravinireri.com", 
      icon: Mail,
      hint: "best way to reach me"
    },
    { 
      id: "github", 
      label: "github", 
      href: "https://github.com/pravinireri", 
      icon: Github,
      hint: "code speaks louder"
    },
    { 
      id: "linkedin", 
      label: "linkedin", 
      href: "https://linkedin.com/in/pravinireri", 
      icon: Linkedin,
      hint: "the formal stuff"
    },
    { 
      id: "resume", 
      label: "resume", 
      href: "/resume.pdf", 
      icon: FileText,
      hint: "pdf download"
    },
  ];

  return (
    <footer id="contact" className="py-section border-t border-border">
      <div className="w-full max-w-prose-wide mx-auto px-6 md:px-12 lg:px-0">
        <span className="section-label">connect</span>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="font-serif text-heading text-foreground mb-4 lowercase">
              let's talk systems.
            </p>
            <p className="text-body text-text-body max-w-sm">
              i'm always interested in hard problems, thoughtful teams, 
              and conversations about how things should work.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== "email" && link.id !== "resume" ? "_blank" : undefined}
                rel={link.id !== "email" && link.id !== "resume" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between py-3 border-b border-border transition-colors duration-300 hover:border-accent"
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="flex items-center gap-3">
                  <link.icon 
                    className="w-4 h-4 text-text-quiet transition-colors duration-300 group-hover:text-accent" 
                  />
                  <span className="text-body text-text-body group-hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </span>
                </div>
                
                <span 
                  className="text-caption font-mono text-text-whisper transition-all duration-300"
                  style={{
                    opacity: hoveredLink === link.id ? 1 : 0,
                    transform: hoveredLink === link.id ? 'translateX(0)' : 'translateX(-8px)',
                  }}
                >
                  {link.hint}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-small text-text-quiet">
              pravin ireri
            </p>
            <p className="text-caption text-text-whisper font-mono">
              this site is a system, not a portfolio.
            </p>
          </div>
          
          <p className="text-caption text-text-whisper font-mono">
            built with intention. updated occasionally.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
