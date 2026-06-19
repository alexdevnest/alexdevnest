import { Home } from "lucide-react";
import { Button } from "@ui/button";


export default function App () {
  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Home size={16} />
      </Button>
    </>
  );
}