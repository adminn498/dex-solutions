"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="flex h-16 w-full flex-shrink-0 items-center justify-between px-5 pt-6 md:pt-5">
      {/* Logo + Site Name */}
      <Link
        href="/"
        className="flex min-w-max items-center justify-center space-x-2"
      >
        <div className="relative h-[50px] w-[50px] overflow-hidden sm:h-[80px]  sm:w-[80px]">
          <Image
            src="/node_logo.png"
            alt="On-Chain Dapps LOGO"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="hidden font-bold sm:text-lg lg:text-2xl sm:block">
          Decentralized-Net
        </h2>
      </Link>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="cursor-pointer rounded bg-linear2 text-3xl shadow-sm sm:hidden text-white p-1"
        aria-label="Toggle menu"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpened && (
        <div className="absolute top-20 left-0 w-full z-40 bg-[#0C1010]/95 backdrop-blur-md border-b border-white/5 py-4 px-5 sm:hidden">
          <ul className="flex flex-col gap-4 list-none">
            <li>
              <Link
                href=""
                onClick={() => setIsOpened(false)}
                className="text-white/70 hover:text-white text-sm font-medium block py-1"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={() => setIsOpened(false)}
                className="text-white/70 hover:text-white text-sm font-medium block py-1"
              >
                Join Presale
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={() => setIsOpened(false)}
                className="text-white/70 hover:text-white text-sm font-medium block py-1"
              >
                Lite Paper
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
