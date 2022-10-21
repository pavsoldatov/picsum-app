import { useEffect } from "react";

export const useCloseOnEscape = (stateSetter) => {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") stateSetter(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
};
