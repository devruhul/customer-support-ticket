import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import initialTickets from './data/tickets';
import './App.css';


function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleSelectTicket = (ticket) => {
    const alreadyAdded = inProgressTasks.find(t => t.id === ticket.id);
    if (alreadyAdded) {
      toast.info(`"${ticket.title}" is already in progress.`, { position: 'top-right', autoClose: 2500 });
      return;
    }
    setInProgressTasks(prev => [...prev, ticket]);
    toast.success(`Ticket ${ticket.id} added to Task Status!`, {
      position: 'top-right',
      autoClose: 3000,
      icon: '⚡',
    });
  };

  const handleCompleteTask = (task) => {
    // Remove from in-progress
    setInProgressTasks(prev => prev.filter(t => t.id !== task.id));
    // Remove from tickets list
    setTickets(prev => prev.filter(t => t.id !== task.id));
    // Increase resolved count
    setResolvedCount(prev => prev + 1);

    toast.success(`Ticket ${task.id} resolved! Great work! 🎉`, {
      position: 'top-right',
      autoClose: 3500,
    });
  };

  return (
    <div className="app">
      <Navbar />
      <Banner
        totalCount={initialTickets.length}
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedCount}
      />

      <main className="main-section">
        <div className="main-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">Customer Tickets</h2>
              <p className="section-subtitle">
                {tickets.length} open ticket{tickets.length !== 1 ? 's' : ''} · Click a card to start working on it
              </p>
            </div>
            <div className="filter-chips">
              <span className="chip active">All</span>
              <span className="chip">Critical</span>
              <span className="chip">High</span>
              <span className="chip">Medium</span>
            </div>
          </div>

          <div className="content-grid">
            {/* Left: Ticket Cards */}
            <div className="tickets-grid">
              {tickets.length === 0 ? (
                <div className="all-resolved">
                  <div className="all-resolved-icon">🎉</div>
                  <h3>All tickets resolved!</h3>
                  <p>Excellent work — the queue is clear.</p>
                </div>
              ) : (
                tickets.map(ticket => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onSelect={handleSelectTicket}
                    isActive={!!inProgressTasks.find(t => t.id === ticket.id)}
                  />
                ))
              )}
            </div>

            {/* Right: Task Status */}
            <TaskStatus tasks={inProgressTasks} onComplete={handleCompleteTask} />
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
