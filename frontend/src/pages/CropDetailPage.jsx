import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { fetchCropDetails } from '../api/api';

const CropDetailPage = () => {
  const { soilId, cropIndex } = useParams();
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const getCropDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchCropDetails(soilId, cropIndex);
        setCrop(data);
      } catch (err) {
        setError("Fasal ki jankari load karne mein dikkat aayi. Kripya check karein ki server active hai.");
      } finally {
        setLoading(false);
      }
    };
    getCropDetail();
  }, [soilId, cropIndex]);

  return (
    <div className="page-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container" style={{ flexGrow: 1, padding: '40px 24px' }}>
        <BackButton to={`/crops/${soilId}`} label="Fasal List par Wapas Jayein" />

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Fasal ki poori jankari load ho rahi hai...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && crop && (
          <div className="crop-detail-container">
            {/* Header Card */}
            <header className="crop-detail-header-card">
              <div className="crop-header-main">
                <div className="crop-header-emoji">{crop.emoji}</div>
                <div className="crop-header-titles">
                  <span className="subtitle-tag season-tag">{crop.season} Fasal</span>
                  <h1 className="crop-title-large">{crop.name}</h1>
                  <p className="crop-brief">
                    Sowing: <strong>{crop.sowingMonth}</strong> | Harvesting: <strong>{crop.harvestMonth}</strong>
                  </p>
                </div>
              </div>
            </header>

            {/* Layout Grid */}
            <div className="crop-detail-grid">
              
              {/* Left Column: Calendar & Fertilizers */}
              <div className="crop-detail-left-column">
                {/* Active Month Calendar Bar */}
                <div className="detail-card">
                  <h3 className="card-title">📅 Growth Calendar (कब-कब उगती है)</h3>
                  <p className="card-subtitle">
                    Niche diye gaye calendar mein jo mahine <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Hare (Green)</span> hain, unme yeh fasal active rehti hai:
                  </p>
                  
                  <div className="calendar-bar">
                    {months.map((month, index) => {
                      const isActive = crop.activeMonthsIndices.includes(index);
                      return (
                        <div 
                          key={index} 
                          className={`calendar-month-block ${isActive ? 'active' : 'inactive'}`}
                          title={`${month}: ${isActive ? 'Active growing period' : 'Inactive period'}`}
                        >
                          <span className="month-name">{month}</span>
                          <span className="month-status">{isActive ? '✓' : ''}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Fertilizers List */}
                <div className="detail-card" style={{ marginTop: '24px' }}>
                  <h3 className="card-title">🧪 Recommended Fertilizers (खाद और पोषण)</h3>
                  <p className="card-subtitle">
                    Fasal ki acchi upaj aur poshan ke liye in khaad ka santulit matra mein upyog karein:
                  </p>
                  <div className="fertilizer-tags-container">
                    {crop.fertilizers.map((fertilizer, idx) => (
                      <span key={idx} className="fertilizer-tag">
                        🍃 {fertilizer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Steps Guide */}
              <div className="crop-detail-right-column">
                <div className="detail-card steps-card">
                  <h3 className="card-title">🚜 Kaise Ugayein? (Step-by-Step Guide)</h3>
                  <p className="card-subtitle">
                    Sahi tareeke se kheti karne aur bumper paidawar paane ke liye in charano (steps) ka palan karein:
                  </p>
                  
                  <div className="steps-list">
                    {crop.steps.map((step, idx) => (
                      <div key={idx} className="step-item">
                        <div className="step-number">{idx + 1}</div>
                        <div className="step-text">
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .crop-detail-container {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .crop-detail-header-card {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          border-radius: 24px;
          padding: 40px;
          box-shadow: var(--shadow-md);
          margin-bottom: 32px;
        }

        .crop-header-main {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .crop-header-emoji {
          font-size: 5rem;
          background-color: var(--primary-light);
          padding: 24px;
          border-radius: 24px;
          line-height: 1;
        }

        .crop-header-titles {
          flex-grow: 1;
        }

        .season-tag {
          background-color: var(--secondary-light);
          color: #d97706;
          border: 1px solid rgba(217, 119, 6, 0.15);
        }

        .crop-title-large {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 8px 0;
        }

        .crop-brief {
          font-size: 1.15rem;
          color: var(--text-medium);
        }

        .crop-brief strong {
          color: var(--primary-dark);
        }

        /* Detail Grid Layout */
        .crop-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
        }

        .detail-card {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          border-radius: 24px;
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .card-subtitle {
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        /* 12-Month Calendar Bar */
        .calendar-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .calendar-month-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 14px 8px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          border: 1px solid transparent;
        }

        .calendar-month-block.active {
          background-color: var(--primary);
          color: white;
          box-shadow: 0 4px 12px var(--primary-glow);
        }

        .calendar-month-block.inactive {
          background-color: var(--bg-soft);
          color: var(--text-muted);
          border-color: var(--border-light);
        }

        .month-name {
          font-family: var(--font-heading);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .month-status {
          font-size: 0.75rem;
          margin-top: 4px;
          font-weight: 800;
        }

        /* Fertilizer Tags */
        .fertilizer-tags-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .fertilizer-tag {
          background-color: var(--primary-light);
          color: var(--primary-dark);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 18px;
          border-radius: 14px;
          border: 1px solid rgba(29, 158, 117, 0.1);
          transition: var(--transition-fast);
        }

        .fertilizer-tag:hover {
          transform: translateX(4px);
          background-color: #dcfce7;
        }

        /* Step-by-Step Cultivation Guide */
        .steps-card {
          height: 100%;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .step-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
        }

        .step-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .step-number {
          background-color: var(--primary-light);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px var(--primary-glow);
        }

        .step-text p {
          font-size: 1rem;
          color: var(--text-medium);
          line-height: 1.6;
        }

        .loading-state {
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

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .crop-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .crop-header-main {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .crop-header-emoji {
            font-size: 4rem;
            padding: 16px;
          }
          .crop-title-large {
            font-size: 2.2rem;
          }
          .calendar-bar {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}} />
    </div>
  );
};

export default CropDetailPage;
