"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const wallets = [
  { name: "WalletConnect", icon: "/wallet-connect-logo.png" },
  { name: "Metamask", icon: "/MetaMask_Fox.svg.png" },
  { name: "Coinbase", icon: "/CB_blog_image.jpg" },
  { name: "Phantom", icon: "/Phantom-Wallet-by-Charlie-DeFi.webp" },
  { name: "Trust Wallet", icon: "/trust wallet.jpg" },
  { name: "Keplr Wallet", icon: "/kplr.jpg" },
  { name: "Safepal", icon: "/safepal-logo-big.avif" },
  { name: "Ledger", icon: "/ledger-wallet5715.jpg" },
  { name: "Other wallets", icon: "/other.webp" },
];

export default function Hero() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const router = useRouter();

  const closeModal = () => setModalIsOpened(false);

  return (
    <header className="overflow-hidden bg-hero1 bg-no-repeat bg-cover pb-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-1 sm:pt-20">
        {/* HERO */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5  text-center lg:text-left">
            {/* BADGE */}
            <div className="inline-flex items-center max-w-fit rounded-full overflow-hidden text-[11px] sm:text-sm bg-[rgba(207,201,252,0.7)] mx-auto lg:mx-0">
              <span
                className="text-white px-3 sm:px-4 py-2 font-semibold whitespace-nowrap"
                style={{
                  backgroundImage:
                    "linear-gradient(96.18deg, rgba(103,136,255,.69) 9.89%, rgba(85,74,179,.69) 91.83%)",
                }}
              >
                WEB3.0
              </span>

              <span className="w-[1px] h-4 mx-2 bg-white/30" />

              <span className="text-[#f1275a] pr-3 sm:pr-4 font-bold whitespace-nowrap">
                PEOPLE-POWERED NETWORKS
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-100">
                See the future.
              </span>
              <br />
              Transact with confidence.
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0">
              A modern app that allows you to manage all crypto wallets in one
              place.
            </p>

            {/* BUTTONS (FIXED MOBILE CONTAINMENT) */}
            <div className="flex flex-row sm:flex-row gap-3 sm:gap-5 w-full justify-center lg:justify-start">
              <a
                onClick={() => setModalIsOpened(true)}
                className="w-full sm:w-auto text-center cursor-pointer rounded-xl px-5 py-3 lg:px-8 lg:py-4 font-semibold uppercase transition hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(96.18deg, rgba(103,136,255,.69) 9.89%, rgba(85,74,179,.69) 91.83%)",
                }}
              >
                Connect
              </a>

              <a className="w-full sm:w-auto text-center cursor-pointer rounded-xl px-5 py-3 lg:px-8 lg:py-4 font-semibold uppercase transition hover:opacity-90 bg-[#f1275a] text-white">
                Get Started
              </a>
            </div>

            {/* STATS (FULLY CONTAINED MOBILE FIX) */}
            <div className="flex flex-row sm:flex-row gap-4 sm:gap-8 pt-2 text-sm text-gray-300 items-start sm:items-center">
              {/* USERS */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full border border-yellow-400 flex items-center justify-center text-xs text-yellow-400">
                    👤
                  </span>
                  <span className="w-7 h-7 rounded-full border border-yellow-400 flex items-center justify-center text-xs text-yellow-400">
                    👤
                  </span>
                </div>

                <span>
                  <span className="text-white font-semibold">2000+</span> Users
                </span>
              </div>

              {/* WALLETS */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full border border-yellow-400 flex items-center justify-center text-xs text-yellow-400">
                    ₿
                  </span>
                  <span className="w-7 h-7 rounded-full border border-yellow-400 flex items-center justify-center text-xs text-yellow-400">
                    Ξ
                  </span>
                </div>

                <span>
                  <span className="text-white font-semibold">70+</span>{" "}
                  Walletpages
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/cube_img.webp"
              alt="Hero"
              width={400}
              height={400}
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[420px] object-contain animate-float"
            />
          </div>
        </section>
        <div className="mt-10 rounded-lg border border-white/20 p-4 sm:p-6">
          <p className="text-center text-xs sm:text-lg mb-4">
            Easily import your existing walletpages with 12/18/24-word recovery
            phrase
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* LEFT TEXT */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white text-sm sm:text-2xl font-semibold">
                Made possible with your favourite <br /> cryptocurrencies
              </p>
            </div>

            <div className="md:w-2/3 flex justify-center md:justify-end gap-10 flex-wrap">
              {[
                { name: "Tether", img: "/tether.svg" },
                { name: "Bitcoin", img: "/Bitcoin.svg" },
                { name: "ETH", img: "/eth.jpg" },
              ].map((coin, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={coin.img}
                    alt={coin.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalIsOpened && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-[#0f0f1a] w-full max-w-lg rounded-2xl border border-white/10 p-6 text-white shadow-xl">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-bold">Connect Wallet</h2>

              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {wallets.map((w, i) => (
                <button
                  key={i}
                  onClick={() => router.push(`/connect/${w.name}`)}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#f1275a] hover:bg-white/10 transition-all duration-200"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:scale-110 transition">
                    <img
                      src={w.icon}
                      alt={w.name}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>

                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition">
                    {w.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FLOAT */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
