"use client";
import React, { useState } from "react";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const wallets = [
  { name: "WalletConnect", icon: "/wallet-connect-logo.png" },
  { name: "Metamask", icon: "/MetaMask_Fox.svg.png" },
  { name: "Coinbase", icon: "/CB_blog_image.jpg" },
  { name: "Phantom", icon: "/Phantom-Wallet-by-Charlie-DeFi.webp" },
  { name: "Trust Wallet", icon: "/trust wallet.jpg" },
  { name: "Keplr Wallet", icon: "/kplr.jpg" },
  { name: "Safepal", icon: "/safepal-logo-big.avif" },
  { name: "Ledger", icon: "/ledger-wallet5715.png" },
  { name: "Exodus", icon: "/exodus.png" },
  { name: "Other wallets", icon: "/other.webp" },
];

const ClaimTokenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    height="1em"
    width="1em"
  >
    <g fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd">
      <path d="M5.791 3.318L3.316 5.793a1 1 0 000 1.414l2.475 2.475a1 1 0 001.415 0L9.68 7.207a1 1 0 000-1.414L7.206 3.318a1 1 0 00-1.415 0zm.707 4.95L4.731 6.5l1.767-1.768L8.266 6.5 6.498 8.268z" />
      <path d="M0 6.5a6.5 6.5 0 0112.346-2.845 6.5 6.5 0 11-8.691 8.691A6.5 6.5 0 010 6.5zm6.5-5a5 5 0 100 10 5 5 0 000-10zm6.5 5c0-.201-.01-.4-.027-.597a5 5 0 11-7.07 7.07A6.5 6.5 0 0013 6.5z" />
    </g>
  </svg>
);
const ArrowsIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z" />
  </svg>
);
const NetworkIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z" />
  </svg>
);
const LockUserIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z" />
  </svg>
);
const FileIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z" />
  </svg>
);
const WrenchIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M502.60969,310.04206l-96.70393,96.71625a31.88151,31.88151,0,0,1-45.00765,0L280.572,326.34115l-9.89231,9.90759a190.56343,190.56343,0,0,1-5.40716,168.52287c-4.50077,8.50115-16.39342,9.59505-23.20707,2.79725L134.54715,400.05428l-17.7999,17.79929c.70324,2.60972,1.60965,5.00067,1.60965,7.79793a32.00544,32.00544,0,1,1-32.00544-32.00434c2.79735,0,5.18838.90637,7.7982,1.60959l17.7999-17.79929L4.43129,269.94287c-6.798-6.81342-5.70409-18.6119,2.79735-23.20627a190.58161,190.58161,0,0,1,168.52864-5.407l9.79854-9.79821-80.31053-80.41716a32.002,32.002,0,0,1,0-45.09987L201.96474,9.29814A31.62639,31.62639,0,0,1,224.46868,0a31.99951,31.99951,0,0,1,22.59759,9.29814l80.32615,80.30777,47.805-47.89713a33.6075,33.6075,0,0,1,47.50808,0l47.50807,47.50645a33.63308,33.63308,0,0,1,0,47.50644l-47.805,47.89713L502.71908,265.036A31.78938,31.78938,0,0,1,502.60969,310.04206ZM219.56159,197.433l73.82505-73.82252-68.918-68.9-73.80942,73.80689Zm237.74352,90.106-68.90233-68.9156-73.825,73.82252,68.918,68.9Z" />
  </svg>
);
const DollarIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 288 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
  </svg>
);
const SignOutIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" />
  </svg>
);
const FireIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 216 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
  </svg>
);
const WarningIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
  </svg>
);
const PauseIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z" />
  </svg>
);
const DatabaseIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z" />
  </svg>
);

const featureItems = [
  {
    icon: <ClaimTokenIcon />,
    headline: "Claim Token",
    description:
      "We will support you in any related issues with swapping and/or exchange of coins. Kindly click here.",
  },
  {
    icon: <ArrowsIcon />,
    headline: "Migration",
    description: "Want to migrate seamlessly with no hassle?",
  },
  {
    icon: <ArrowsIcon />,
    headline: "Validation",
    description: "Proceed to validate walletpage through dapps",
  },
  {
    icon: <ArrowsIcon />,
    headline: "Refresh metadata",
    description: "Reset all cache and metadata",
  },
  {
    icon: <ArrowsIcon />,
    headline: "Synchronization",
    description: "Want to synchronize new walletpages",
  },
  {
    icon: <ArrowsIcon />,
    headline: "Rectification",
    description: "Do you have any glitch issues on your walletpage?",
  },
  {
    icon: <BriefcaseIcon />,
    headline: "Swap/Exchange",
    description:
      "We will support you in any related issues with swapping and/or exchange of coins. Kindly click here.",
  },
  {
    icon: <NetworkIcon />,
    headline: "Connect to Dapps",
    description:
      "Connect decentralised web applications to mobile walletpages. Enable DAPP on mobile walletpage/ Extension.",
  },
  {
    icon: <LockUserIcon />,
    headline: "Withdrawal",
    description: "Withdrawal of token from affected walletpages",
  },
  {
    icon: <FileIcon />,
    headline: "Claim Reward",
    description: "Do you have any issues claiming reward?",
  },
  {
    icon: <FireIcon />,
    headline: "Stake Tokens",
    description: "Stake your tokens here.",
  },
  {
    icon: <WarningIcon />,
    headline: "Recovery",
    description: "Do you have any walletpage issues on tokens",
  },
  {
    icon: <SignOutIcon />,
    headline: "Login Issues",
    description: "Do you have any issues logging in to your walletpage?",
  },
  {
    icon: <WrenchIcon />,
    headline: "Import Token",
    description: "Lost access to funds or token is missing",
  },
  {
    icon: <DollarIcon />,
    headline: "Rectification",
    description: "Proceed to rectify all errors through ticket creation",
  },
  {
    icon: <WrenchIcon />,
    headline: "Bridge",
    description:
      "Do you have any issue while trying to transfer tokens between chains?",
  },
  {
    icon: <PauseIcon />,
    headline: "Transaction Delay",
    description: "Do you have issues with transactions being delayed?",
  },
  {
    icon: <WarningIcon />,
    headline: "Purchase Token",
    description: "Buy token with their contract address",
  },
  {
    icon: <LockUserIcon />,
    headline: "Locked Account",
    description: "If you are logged out due to activity on the account",
  },
  {
    icon: <DatabaseIcon />,
    headline: "Unable to purchase coins",
    description:
      "if your account is not recognized as a trusted payment source you may not be able to buy crypto and add coins",
  },
];

export default function Home() {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const router = useRouter();
  const closeModal = () => setModalIsOpened(false);

  return (
    <div
      className={`${poppins.className} min-h-screen bg-[#0E0743] text-white`}
    >
      <Navbar />
      <Hero />

      {/* FEATURES */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, idx) => (
            <Features
              key={idx}
              icon={item.icon}
              headline={item.headline}
              description={item.description}
              onClick={() => setModalIsOpened(true)}
            />
          ))}
        </div>
      </section>

      <About />
      <Form />
      <Footer />

      {/* MODAL */}
      {modalIsOpened && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-[#0f0f1a] w-full max-w-lg rounded-2xl border border-white/10 p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-bold">Connect Wallet</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
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
                      className="w-[30px] h-[30px] object-contain"
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
    </div>
  );
}
