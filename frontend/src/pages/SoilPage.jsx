import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SoilCard from '../components/SoilCard';
import { fetchSoils } from '../api/api';

const SoilPage = () => {
  const [soils, setSoils] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSoils = async () => {
      try {
        setLoading(true);
        const data = await fetchSoils();
        setSoils(data);
      } catch (err) {
        setError("Soils list load karne mein dikkat aayi. Kripya check karein ki server chal raha hai.");
      } finally {
        setLoading(false);
      }
    };
    getSoils();
  }, []);

  return (
    <div className="page-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main className="container" style={{ flexGrow: 1, padding: '40px 24px' }}>
        <header className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="subtitle-tag">STEP 2 OF 4</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '8px 0 12px 0', color: 'var(--text-dark)' }}>
            Apni Mitti Ka Chayan Karein
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', maxWidth: '600px', margin: '0 auto' }}>
            Bharat ki 8 mukhya mitti ke prakaron mein se apni mitti chunein aur jaanein kaunsi fasal aapke liye sabse behtareen rahegi.
          </p>
        </header>

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Mitti ke prakar load ho rahe hain, kripya intezar karein...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="btn-primary" style={{ marginTop: '16px', padding: '10px 20px', fontSize: '0.95rem' }}>
              Dobara Koshish Karein
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid">
            {soils.map((soil) => (
              <SoilCard key={soil.id} soil={soil} />
            ))}
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .subtitle-tag {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.1em;
          font-size: 0.85rem;
          background-color: var(--primary-light);
          padding: 6px 14px;
          border-radius: 30px;
          display: inline-block;
        }

        .loading-state, .error-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--border);
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        .error-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .error-state p {
          color: #ef4444;
          font-weight: 600;
          font-size: 1.1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

export default SoilPage;
