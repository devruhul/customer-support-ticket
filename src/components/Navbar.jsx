import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">CS — Ticket System</div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-actions">
          <button className="btn-new-ticket">+ New Ticket</button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Changelog</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Download</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="btn-new-ticket">+ New Ticket</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
