import React from "react";

const Features = ({ icon, headline, description, onClick }) => {
  return (
    <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl bg-primary-bg2 flex flex-col items-center justify-center space-y-5 rounded border border-[#d0cad8] p-6 sm:p-8 text-center shadow-md hover:bg-primary/10 mx-auto">
      {/* Icon */}
      <span className="text-4xl sm:text-5xl md:text-6xl">{icon}</span>

      {/* Headline */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
        {headline}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-200 max-w-md">
        {description}
      </p>

      {/* BUTTON (NOW WORKS) */}
      <button
        onClick={onClick}
        className="cursor-pointer rounded-md bg-gradient-to-br from-slate-100 to-slate-300 px-6 sm:px-8 py-2 sm:py-3 font-semibold text-[#0E0743] text-sm sm:text-base hover:scale-105 transition"
      >
        Click here!
      </button>
    </div>
  );
};

export default Features;
