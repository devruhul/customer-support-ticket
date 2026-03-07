import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, onSelect, isActive }) => {
  const priorityClass = ticket.priority.toLowerCase().replace(' ', '-');

  return (
    <div
      className={`ticket-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(ticket)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(ticket)}
    >
      <div className="card-top">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={`status-badge ${isActive ? 'badge-progress' : 'badge-open'}`}>
          {isActive ? '🟡 In-Progress' : '🟢 Open'}
        </span>
      </div>
      <p className="ticket-desc">{ticket.description}</p>
      <div className="card-bottom">
        <div className="card-meta">
          <span className={`priority-tag priority-${priorityClass}`}>{ticket.priority} PRIORITY</span>
          <span className="ticket-id">#{ticket.id}</span>
        </div>
        <div className="card-meta right">
          <span className="customer-name">{ticket.customer}</span>
          <span className="ticket-date">{new Date(ticket.createdAt).toLocaleDateString('en-GB')}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
