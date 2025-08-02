import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
          }
          if (entry.entryType === "first-input") {
            const fidEntry = entry as PerformanceEventTiming;
            console.log("FID:", fidEntry.processingStart - entry.startTime);
          }
          if (entry.entryType === "layout-shift") {
            const clsEntry = entry as PerformanceEntry & { value: number };
            console.log("CLS:", clsEntry.value);
          }
        });
      });

      try {
        observer.observe({
          entryTypes: [
            "largest-contentful-paint",
            "first-input",
            "layout-shift",
          ],
        });
      } catch {
        // Fallback for browsers that don't support all metrics
        console.log("Performance monitoring not fully supported");
      }

      // Cleanup
      return () => {
        try {
          observer.disconnect();
        } catch {
          // Silent fail
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
