import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V12C17 12.5523 16.5523 13 16 13H11L7 17V13H4C3.44772 13 3 12.5523 3 12V4Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="logo-text">SupportZone</span>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-links">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Tickets</a>
          <a href="#" className="nav-link">Analytics</a>
          <a href="#" className="nav-link">Team</a>
        </div>

        <div className="navbar-actions">
          <button className="btn-new-ticket">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            New Ticket
          </button>
          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Dashboard</a>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Tickets</a>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Analytics</a>
        <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Team</a>
        <button className="btn-new-ticket mobile">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
