import React from 'react';
import './Agents.css';

const agents = [
  { name: 'Kaiara Spencer', title: 'Real Estate Agent', image: '/client1.jpg' },
  { name: 'Dave Simpson', title: 'Real Estate Agent', image: '/client2.jpg' },
  { name: 'Ben Thompson', title: 'Real Estate Agent', image: '/client3.jpg' },
  { name: 'Kyla Stewart', title: 'Real Estate Agent', image: '/client4.jpg' },
  { name: 'Rich Moffatt', title: 'Real Estate Agent', image: '/client5.jpg' },
  { name: 'Stuart Redman', title: 'Real Estate Agent', image: '/client6.jpg' },
];

const Agents = () => {
  return (
    <section className="agents-section">
      <h2 className="agents-title">Clients</h2>
      <p className="agents-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <div className="agent-image-placeholder">
              <img src={agent.image} alt={agent.name} />
            </div>
            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p>{agent.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
