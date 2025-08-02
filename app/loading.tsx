import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Sweet loading animation */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-primary/40 rounded-full mx-auto"
            style={{
              animation: "spin 1s linear infinite reverse",
              animationDelay: "0.5s",
            }}
          ></div>
        </div>

        <h2 className="text-2xl font-serif text-primary mb-2">
          Sweet Bliss Bakery
        </h2>
        <p className="text-text/70">Preparing something sweet...</p>
      </div>
    </div>
  );
}
