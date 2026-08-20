import { useEffect } from "react";
import { applySeo } from "../utils/seo";

export const useSeo = (options: Parameters<typeof applySeo>[0]) => {
  useEffect(() => {
    applySeo(options);
  }, [options]);
};
