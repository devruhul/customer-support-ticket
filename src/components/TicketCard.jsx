import React from 'react';
import './TicketCard.css';

const priorityConfig = {
  Critical: { color: '#f7566a', bg: 'rgba(247, 86, 106, 0.12)', icon: '🔴' },
  High:     { color: '#f7934f', bg: 'rgba(247, 147, 79, 0.12)', icon: '🟠' },
  Medium:   { color: '#f7c94f', bg: 'rgba(247, 201, 79, 0.12)', icon: '🟡' },
  Low:      { color: '#3dd68c', bg: 'rgba(61, 214, 140, 0.12)', icon: '🟢' },
};

const TicketCard = ({ ticket, onSelect, isActive }) => {
  const pCfg = priorityConfig[ticket.priority] || priorityConfig.Low;

  return (
    <div
      className={`ticket-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(ticket)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(ticket)}
    >
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span
          className="priority-badge"
          style={{ color: pCfg.color, background: pCfg.bg }}
        >
          {ticket.priority}
        </span>
      </div>

      <h3 className="ticket-title">{ticket.title}</h3>
      <p className="ticket-desc">{ticket.description}</p>

      <div className="card-footer">
        <div className="customer-info">
          <div className="avatar">{ticket.customer.charAt(0)}</div>
          <span className="customer-name">{ticket.customer}</span>
        </div>
        <span className="ticket-date">{new Date(ticket.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
      </div>

      {isActive && (
        <div className="active-indicator">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          In Progress
        </div>
      )}
    </div>
  );
};

export default TicketCard;
