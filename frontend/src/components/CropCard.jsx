import React from 'react';
import { useNavigate } from 'react-router-dom';

const CropCard = ({ crop, soilId, index }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="crop-card" 
      onClick={() => navigate(`/crops/${soilId}/${index}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/crops/${soilId}/${index}`);
        }
      }}
    >
      <div className="crop-emoji">{crop.emoji}</div>
      <div className="crop-info">
        <h3 className="crop-title">{crop.name}</h3>
        <div className="crop-season">
          <span>📅 Season:</span>
          <strong>{crop.season}</strong>
        </div>
      </div>
      <div className="rank-badge">
        Rank #{crop.rank || (index + 1)}
      </div>
    </div>
  );
};

export default CropCard;
