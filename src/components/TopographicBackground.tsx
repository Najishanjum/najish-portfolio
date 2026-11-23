import React from "react";

export const TopographicBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        backgroundColor: "#07080a",
      }}
    >
      {/* 1. Exact Reference Photorealistic Base */}
      <img
        src="/images/portfolio-topographic-bg.jpg"
        alt=""
        className="w-full h-full object-cover object-top opacity-95"
        loading="eager"
      />

      {/* 2. Crisp Vector SVG Contour & Lighting Enhancement */}
      <img
        src="/images/topographic-bg.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top mix-blend-screen opacity-75"
        loading="eager"
      />
    </div>
  );
};
