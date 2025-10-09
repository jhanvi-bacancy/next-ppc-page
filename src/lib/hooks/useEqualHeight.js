import { useEffect, useCallback } from "react";

export const useEqualHeight = (selectors) => {
  const adjustHeights = useCallback((selector) => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // Reset heights to auto first
    elements.forEach((el) => {
      el.style.height = "auto";
    });

    // Group elements by their top position
    const groups = {};
    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (!groups[top]) groups[top] = [];
      groups[top].push(el);
    });

    // Set max height for each group
    Object.values(groups).forEach((group) => {
      const maxHeight = Math.max(...group.map((el) => el.offsetHeight));
      group.forEach((el) => {
        el.style.height = `${maxHeight}px`;
      });
    });
  }, []);

  const adjustAllHeights = useCallback(() => {
    if (typeof window === "undefined") return;

    // If selectors is an array, process each selector
    if (Array.isArray(selectors)) {
      selectors.forEach((selector) => adjustHeights(selector));
    } else if (typeof selectors === "string") {
      // If selectors is a single string, process it directly
      adjustHeights(selectors);
    }
  }, [adjustHeights, selectors]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial adjustment
    adjustAllHeights();

    // Add resize listener
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        adjustAllHeights();
      }, 250); // Debounce resize events
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [adjustAllHeights]);

  return { adjustAllHeights };
};
