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
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleSelectTicket = (ticket) => {
    if (inProgressTasks.find(t => t.id === ticket.id)) {
      toast.info(`"${ticket.title}" is already in progress.`, { autoClose: 2500 });
      return;
    }
    setInProgressTasks(prev => [...prev, ticket]);
    toast.success(`Ticket added to Task Status!`, { autoClose: 2500 });
  };

  const handleCompleteTask = (task) => {
    setInProgressTasks(prev => prev.filter(t => t.id !== task.id));
    setTickets(prev => prev.filter(t => t.id !== task.id));
    setResolvedTasks(prev => [...prev, task]);
    toast.success(`Ticket resolved! 🎉`, { autoClose: 2500 });
  };

  return (
    <div className="app">
      <Navbar />
      <Banner
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedTasks.length}
      />

      <main className="main-section">
        <div className="main-inner">
          <div className="content-grid">
            {/* Left: Ticket Cards */}
            <div className="tickets-side">
              <h2 className="section-title">Customer Tickets</h2>
              {tickets.length === 0 ? (
                <div className="all-clear">
                  <p>🎉 All tickets resolved! Great work.</p>
                </div>
              ) : (
                <div className="tickets-grid">
                  {tickets.map(ticket => (
                    <TicketCard
                      key={ticket.id}
                      ticket={ticket}
                      onSelect={handleSelectTicket}
                      isActive={!!inProgressTasks.find(t => t.id === ticket.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Task Status */}
            <TaskStatus
              tasks={inProgressTasks}
              resolvedTasks={resolvedTasks}
              onComplete={handleCompleteTask}
            />
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
