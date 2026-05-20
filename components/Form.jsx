import React from "react";

const Form = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-2xl bg-white/5  rounded-xl shadow-md p-5 sm:p-8 space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold sm:text-2xl text-white flex justify-center">
            Subscribe
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-300 font-light">
            Join the hundreds of teams using our services, subscribe to get
            exclusive news & offers
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col md:flex-row gap-3 w-full">
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full md:flex-[1.4] rounded-lg px-4 py-3 bg-gradient-to-tr from-slate-50 to-slate-100 text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#0E0743]"
          />

          <button
            type="submit"
            className="w-full md:flex-1 flex cursor-pointer items-center justify-center rounded-md bg-[#321eca] px-4 py-3 text-center uppercase text-slate-100 transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
