import React from 'react';
import './TaskStatus.css';

const TaskStatus = ({ tasks, resolvedTasks, onComplete }) => {
  return (
    <aside className="task-status">
      <h2 className="task-status-title">Task Status</h2>
      <p className="task-status-sub">Select a ticket to add to Task Status</p>

      {/* In Progress Tasks */}
      <div className="task-section">
        {tasks.length === 0 ? (
          <p className="empty-msg">No tickets in progress yet.</p>
        ) : (
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className="task-item">
                <span className="task-item-title">{task.title}</span>
                <button className="btn-complete" onClick={() => onComplete(task)}>
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Tasks */}
      <div className="resolved-section">
        <h3 className="resolved-title">Resolved Task</h3>
        {resolvedTasks.length === 0 ? (
          <p className="empty-msg">No resolved tasks yet.</p>
        ) : (
          <div className="resolved-list">
            {resolvedTasks.map(task => (
              <div key={task.id} className="resolved-item">
                <span className="resolved-item-title">{task.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default TaskStatus;
