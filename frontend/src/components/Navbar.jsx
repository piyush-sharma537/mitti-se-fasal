import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          🌾 <span>Mitti se <span>Fasal</span></span>
        </Link>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link to="/soils" className="nav-link">
            Mitti Ke Prakar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
