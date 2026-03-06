import React from 'react';
import './TaskStatus.css';

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <aside className="task-status">
      <div className="task-status-header">
        <h2 className="task-status-title">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 4v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Task Status
        </h2>
        <span className="task-count">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <div className="task-empty">
          <div className="empty-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 6a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H8l-4 4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>No tickets in progress</p>
          <span>Click a ticket card to start working on it</span>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-item-info">
                <span className="task-item-id">{task.id}</span>
                <h4 className="task-item-title">{task.title}</h4>
                <span className="task-item-customer">{task.customer}</span>
              </div>
              <button
                className="btn-complete"
                onClick={() => onComplete(task)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default TaskStatus;
