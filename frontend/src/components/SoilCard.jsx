import React from 'react';
import { useNavigate } from 'react-router-dom';

const SoilCard = ({ soil }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="soil-card" 
      onClick={() => navigate(`/crops/${soil.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/crops/${soil.id}`);
        }
      }}
    >
      <div className="soil-emoji">{soil.emoji}</div>
      <h3 className="soil-title">{soil.name}</h3>
      <p className="soil-desc">{soil.description}</p>
      <div className="badge-container">
        {soil.regions.map((region, index) => (
          <span key={index} className="region-badge">
            {region}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoilCard;
