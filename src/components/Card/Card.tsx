import React from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  selected = false,
  onClick
}) => {
  return (
    <div className={`card ${selected ? 'card--selected' : ''}`} onClick={onClick}>
      <div className="card__header">
        <div className="card__radio">
        <span className={`card__circle ${selected ? 'card__circle--selected' : ''}`} />
        </div>
        <div className="card__block">
          {icon && <div className="card__icon">{icon}</div>}
          <div className="card__title">{title}</div>
        </div>
      </div>
      <div className="card__description">{description}</div>
    </div>
  );
};

export default Card;
