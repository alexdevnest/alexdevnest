/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = (e) => {
      setMatches(e.matches);
    };

    setMatches(media.matches);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}