import { useState, useEffect } from "react";
import { DEVICE } from "constants/mediaQueries.constants";

type IDEVICEKeys = keyof typeof DEVICE;
export type IQueryType = typeof DEVICE[IDEVICEKeys];

export const useMediaQuery = (query: IQueryType) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
