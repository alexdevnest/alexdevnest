import { AnimatedThemeToggler } from "@ui/animated-theme-toggler";
import { cn } from "@lib/utils"


const ThemeToggle = ({ className }) => (
  <AnimatedThemeToggler
    duration={2000}
    className={
      cn("hidden", className)
    }  
  />
);


export default ThemeToggle;