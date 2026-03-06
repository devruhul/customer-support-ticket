import React from 'react';
import './Banner.css';

const Banner = ({ inProgressCount, resolvedCount, totalCount }) => {
  return (
    <section className="banner">
      <div className="banner-bg">
        <div className="banner-grid"></div>
        <div className="banner-glow banner-glow-1"></div>
        <div className="banner-glow banner-glow-2"></div>
      </div>

      <div className="banner-inner">
        <div className="banner-text">
          <div className="banner-badge">
            <span className="pulse-dot"></span>
            Live Support Dashboard
          </div>
          <h1 className="banner-title">
            Customer Support
            <span className="banner-title-accent"> Zone</span>
          </h1>
          <p className="banner-subtitle">
            Track, manage, and resolve customer tickets with clarity and speed. Your team's command center for every issue.
          </p>
        </div>

        <div className="banner-stats">
          <div className="stat-card stat-total">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5l-3 3V4z" fill="currentColor"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-number">{totalCount}</span>
              <span className="stat-label">Total Tickets</span>
            </div>
          </div>

          <div className="stat-card stat-progress">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 5v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-number">{inProgressCount}</span>
              <span className="stat-label">In Progress</span>
            </div>
          </div>

          <div className="stat-card stat-resolved">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M5.5 9l2.5 2.5L12.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-number">{resolvedCount}</span>
              <span className="stat-label">Resolved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
