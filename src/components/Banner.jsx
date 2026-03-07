import React from 'react';
import './Banner.css';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-card banner-purple">
          <div className="banner-pattern"></div>
          <p className="banner-label">In-Progress</p>
          <h2 className="banner-count">{inProgressCount}</h2>
        </div>
        <div className="banner-card banner-green">
          <div className="banner-pattern"></div>
          <p className="banner-label">Resolved</p>
          <h2 className="banner-count">{resolvedCount}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
