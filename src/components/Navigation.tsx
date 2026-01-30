import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "now", label: "now" },
    { id: "work", label: "work" },
    { id: "systems", label: "systems" },
    { id: "log", label: "log" },
    { id: "skills", label: "skills" },
    { id: "contact", label: "connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Find active section
      const scrollPosition = window.scrollY + 200;
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className="fixed top-0 right-0 z-50 p-6 md:p-10 transition-all duration-500"
      style={{
        opacity: isScrolled ? 1 : 0.6,
      }}
    >
      <ul className="flex flex-col items-end gap-2 md:gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`relative text-small font-mono lowercase tracking-wide transition-all duration-500 ${
                activeSection === section.id 
                  ? 'text-foreground' 
                  : 'text-text-whisper hover:text-text-quiet'
              }`}
            >
              <span className="relative">
                {section.label}
                {activeSection === section.id && (
                  <span 
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-accent"
                  />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
