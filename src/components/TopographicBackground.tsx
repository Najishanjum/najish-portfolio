import React from "react";

export const TopographicBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-50 overflow-hidden select-none"
      style={{
        backgroundColor: "#07080a",
      }}
    >
      <img
        src="/images/topographic-bg.svg"
        alt=""
        className="w-full h-full object-cover object-top"
        loading="eager"
      />
    </div>
  );
};

