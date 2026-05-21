import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="my-10 min-h-screen bg-ab2 bg-cover bg-center py-8 md:px-5"
    >
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center space-y-8 p-5 sm:max-w-lg sm:space-y-12 md:max-w-xl lg:max-w-6xl">
        {/* Row 1 */}
        <div className="flex flex-col text-center lg:flex-row lg:items-center lg:text-left">
          <div className="space-y-5 lg:w-1/2">
            <h3 className="text-2xl font-semibold sm:text-3xl lg:text-[40px] lg:leading-[1.3]">
              <span>The most efficient solution provider in the </span>
              <span className="bg-lg1 bg-clip-text text-transparent">
                blockchain.
              </span>
            </h3>
            <p className="font-light leading-relaxed lg:text-lg">
              Most trusted platform for solutions on all transaction issues,
              staking issues (pool &amp; farm), balance irregularities,
              whitelist issues, withdrawal issues and bridging errors.
            </p>
          </div>
          <div className="relative h-52 sm:h-64 md:h-72 lg:w-1/2">
            <img
              alt="app_illustration1 image"
              src="/dappa.png"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col text-center lg:flex-row-reverse lg:items-center lg:text-left">
          <div className="space-y-5 lg:w-1/2">
            <h3 className="text-2xl font-semibold sm:text-3xl lg:text-[40px] lg:leading-[1.3]">
              <span>The most complex part of web3, </span>
              <span className="bg-lg1 bg-clip-text text-transparent">
                made simple.
              </span>
            </h3>
            <p className="font-light leading-relaxed lg:text-lg">
              We powered next generation application for blockchain and
              cryptocurrency asset management which enables you to manually or
              automatically sync your crypto walletpages accounts into a single
              platform.
            </p>
          </div>
          <div className="relative h-52 sm:h-64 md:h-72 lg:w-1/2">
            <img
        
              src="/dappa.png"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
