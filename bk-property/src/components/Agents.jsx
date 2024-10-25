import React from 'react';
import './Agents.css';

const agents = [
  { name: 'Kaiara Spencer', title: 'Real Estate Agent' },
  { name: 'Dave Simpson', title: 'Real Estate Agent' },
  { name: 'Ben Thompson', title: 'Real Estate Agent' },
  { name: 'Kyla Stewart', title: 'Real Estate Agent' },
  { name: 'Rich Moffatt', title: 'Real Estate Agent' },
  { name: 'Stuart Redman', title: 'Real Estate Agent' },
];

const Agents = () => {
  return (
    <section className="agents-section">
      <h2 className="agents-title">Agents</h2>
      <p className="agents-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <div className="agent-image-placeholder">
              {/* Image placeholder */}
              <img src="image-placeholder.png" alt="Realtor 1" />
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
