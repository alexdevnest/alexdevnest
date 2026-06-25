import { Button } from "@ui/button";


export default function Sidebar ({ activeSection }) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certif." },
    { id: "contact", label: "Contact" },
  ]


  return (
    <aside id="aside" aria-label="Section navigation">
      <div id="sidebar-ico">
        <Button
          asChild
          variant="outline"
          size="icon-lg"
          className="rounded-sm"
          aria-label="Go back to top"
        >
          <a href="#" className="rotate-45 pb-1.5 transition-all duration-500">
            <span className="-rotate-45 font-bold text-foreground">
              AK
              <span className="text-primary pl-0.5 text-[1.2rem] font-extrabold">.</span>
            </span>
          </a>
        </Button>
      </div>
      
      <nav className="flex-1 pl-2">
        <ul
          className={`flex flex-col h-full w-full`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li
                key={item.id}
                className={`
                  flex-1
                  ${
                    isActive
                      ? "border-r-2 border-primary bg-background"
                      : "hover:border-r-2 hover:border-primary hover:bg-background"
                  }
                `}
              >
                <a
                  href={`#${item.id}`}
                  className={[
                    "text-foreground/50 text-center p-3 text-[1.1rem] font-sans relative inline-block [writing-mode:vertical-rl] [text-orientation:mixed] transition-colors duration-200",
                    isActive ? "text-foreground/90" : "hover:text-foreground/90",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  );
}