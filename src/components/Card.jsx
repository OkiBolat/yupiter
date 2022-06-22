import React from 'react';

import '../styles/card.scss';

const Card = ({ type, title }) => {
  return (
    <div className="card">
      <button className="card__delBtn">
        Del
      </button>
      <button className="card__type">
        Design
      </button>
      <div className="card__title">
        SOFA
      </div>
    </div>
  )
};

export default Card;