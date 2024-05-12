import React from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  value: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
