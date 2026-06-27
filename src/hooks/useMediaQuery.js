/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function"
      ? window.matchMedia(query).matches
      : false;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }

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