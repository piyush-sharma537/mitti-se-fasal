import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => navigate('/soils'), 550);
  };

  return (
    <div className={`landing-root ${isTransitioning ? 'lp-exit' : ''}`}>
      <main className="lp-hero">

        {/* ── Left: Text content ── */}
        <div className="lp-content">
          <div className="lp-tag">🌱 Kisaan ka Digital Saathi</div>

          <h1 className="lp-title">
            <span className="lp-title-mitti">Mitti se</span>
            <br />
            <span className="lp-title-fasal">Fasal</span>
          </h1>

          <p className="lp-subtitle">
            Apni mitti ko jaanein, sahi fasal chunein
            <br />
            aur apni <strong>upaj badhayein.</strong>
            <span className="lp-subtitle-en">
              Discover the best crops for your region's soil.
            </span>
          </p>

          <button
            id="shuru-karein-btn"
            onClick={handleStart}
            className="btn-primary lp-cta"
          >
            Shuru Karein <span className="lp-arrow">→</span>
          </button>

          {/* Decorative stat pills */}
          <div className="lp-stats">
            <div className="lp-stat">🌾 8 Mitti Prakar</div>
            <div className="lp-stat">🌿 30+ Fasalein</div>
            <div className="lp-stat">🤖 AI Chatbot</div>
          </div>
        </div>

        {/* ── Right: Farmer image ── */}
        <div className="lp-image-wrap">
          <div className="lp-image-glow" />
          <img
            src="/images/hero-farmer.png"
            alt="Smiling Indian Farmer holding wheat"
            className="lp-image"
          />
        </div>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Root ── */
        .landing-root {
          background-color: var(--bg-warm);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          overflow: hidden;
          position: relative;
        }
        .landing-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 40%, rgba(29,158,117,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(229,169,60,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── Hero grid ── */
        .lp-hero {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Left content ── */
        .lp-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
          animation: fadeInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .lp-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--primary-light);
          color: var(--primary-dark);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 16px;
          border-radius: 30px;
          width: fit-content;
          border: 1px solid rgba(29,158,117,0.2);
          letter-spacing: 0.02em;
        }

        /* ── Title ── */
        .lp-title {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .lp-title-mitti {
          color: var(--text-dark);
        }
        .lp-title-fasal {
          color: var(--primary);
          position: relative;
          display: inline-block;
        }
        .lp-title-fasal::after {
          content: '';
          position: absolute;
          left: 0; bottom: 6px;
          width: 100%; height: 10px;
          background: linear-gradient(90deg, var(--primary-light), transparent);
          border-radius: 6px;
          z-index: -1;
        }

        /* ── Subtitle ── */
        .lp-subtitle {
          font-size: 1.3rem;
          color: var(--text-medium);
          line-height: 1.65;
        }
        .lp-subtitle strong { color: var(--primary-dark); }
        .lp-subtitle-en {
          display: block;
          font-size: 1rem;
          color: var(--text-light);
          margin-top: 8px;
          font-weight: 400;
        }

        /* ── CTA button ── */
        .lp-cta {
          align-self: flex-start;
          font-size: 1.2rem;
          padding: 16px 38px;
          border-radius: 16px;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }
        .lp-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .lp-cta:hover .lp-arrow { transform: translateX(7px); }

        /* ── Stats row ── */
        .lp-stats {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
        }
        .lp-stat {
          background: var(--card-bg);
          border: 1.5px solid var(--card-border);
          color: var(--text-medium);
          font-size: 0.88rem;
          font-weight: 600;
          padding: 7px 16px;
          border-radius: 30px;
          box-shadow: var(--shadow-sm);
        }

        /* ── Image side ── */
        .lp-image-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          /* slide in from right */
          animation: fadeInRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .lp-image-glow {
          position: absolute;
          width: 85%;
          height: 85%;
          background: radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(30px);
          z-index: 0;
        }
        .lp-image {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          border-radius: 32px;
          box-shadow: 0 24px 60px rgba(26,60,46,0.16);
          object-fit: cover;
          border: 4px solid var(--primary-light);
        }

        /* ── Exit transition ── */
        .lp-exit {
          animation: lpFadeOut 0.55s cubic-bezier(0.7,0,0.3,1) forwards !important;
        }
        @keyframes lpFadeOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.96) translateY(-16px); }
        }

        /* ── Responsive ── */
        @media (max-width: 992px) {
          .landing-root { padding: 40px 24px; }
          .lp-hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .lp-content { align-items: center; }
          .lp-cta { align-self: center; }
          .lp-title { font-size: 3.5rem; }
          .lp-stats { justify-content: center; }
          .lp-image { max-width: 360px; }
        }
        @media (max-width: 480px) {
          .lp-title { font-size: 2.8rem; }
          .lp-subtitle { font-size: 1.1rem; }
          .lp-image { max-width: 260px; }
          .lp-hero { gap: 28px; }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
