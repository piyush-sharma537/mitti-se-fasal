import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import CropCard from '../components/CropCard';
import { fetchCropsBySoil, fetchSoils } from '../api/api';

const CropListPage = () => {
  const { soilId } = useParams();
  const [crops, setCrops] = useState([]);
  const [soilInfo, setSoilInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        // Fetch crops for the soil
        const cropsData = await fetchCropsBySoil(soilId);
        setCrops(cropsData);

        // Fetch soils to get current soil's meta-information
        const soilsList = await fetchSoils();
        const currentSoil = soilsList.find(s => s.id === soilId);
        setSoilInfo(currentSoil);
      } catch (err) {
        setError("Faslon ki list load karne mein dikkat aayi. Kripya check karein ki API server active hai.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [soilId]);

  return (
    <div className="page-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container" style={{ flexGrow: 1, padding: '40px 24px' }}>
        <BackButton to="/soils" label="Mitti Selection par Wapas Jayein" />

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Sabse behtareen faslein load ho rahi hain...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="crop-list-content">
            {/* Soil Detail Header Banner */}
            {soilInfo && (
              <header className="soil-info-banner">
                <div className="soil-info-emoji">{soilInfo.emoji}</div>
                <div className="soil-info-text">
                  <span className="subtitle-tag">SELECTED SOIL TYPE</span>
                  <h2 className="soil-info-title">{soilInfo.name}</h2>
                  <p className="soil-info-desc">{soilInfo.description}</p>
                  <div className="soil-info-regions">
                    <strong>Pramukh Kshetr (Major Regions):</strong>
                    <div className="badge-container" style={{ marginTop: '8px' }}>
                      {soilInfo.regions.map((region, idx) => (
                        <span key={idx} className="region-badge highlight-badge">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </header>
            )}

            {/* Ranked Crops Section */}
            <section className="crops-section" style={{ marginTop: '40px' }}>
              <div className="section-title-bar">
                <h3 className="section-title">
                  Top Recommended Crops (Ranked Order)
                </h3>
                <p className="section-subtitle">
                  {soilInfo?.name || "Is mitti"} ke liye sabse zyada upaj dene wali top faslein niche di gayi hain:
                </p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', marginTop: '24px' }}>
                {crops.map((crop, index) => (
                  <CropCard 
                    key={index} 
                    crop={crop} 
                    soilId={soilId} 
                    index={index} 
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .soil-info-banner {
          background-color: var(--bg-pure);
          border: 1px solid var(--border-light);
          border-radius: 24px;
          padding: 36px;
          box-shadow: var(--shadow-md);
          display: flex;
          gap: 32px;
          align-items: center;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .soil-info-emoji {
          font-size: 4.5rem;
          background-color: var(--primary-light);
          padding: 24px;
          border-radius: 24px;
          line-height: 1;
        }

        .soil-info-text {
          flex-grow: 1;
        }

        .soil-info-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 6px 0 12px 0;
        }

        .soil-info-desc {
          font-size: 1.05rem;
          color: var(--text-medium);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .soil-info-regions {
          font-size: 0.95rem;
          color: var(--text-medium);
        }

        .highlight-badge {
          background-color: var(--primary-light) !important;
          color: var(--primary-dark) !important;
        }

        .section-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--text-light);
          margin-top: 4px;
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

        @media (max-width: 768px) {
          .soil-info-banner {
            flex-direction: column;
            text-align: center;
            padding: 24px;
            gap: 20px;
          }
          .soil-info-emoji {
            font-size: 3rem;
            padding: 16px;
          }
          .soil-info-title {
            font-size: 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default CropListPage;
