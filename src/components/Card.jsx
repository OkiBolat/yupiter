import React, { useState } from 'react';

import '../styles/card.scss';

const Card = ({card, addOption }) => {
  const[active, setActive] = useState(null)

  const { type, name, image, id} = card;

  const setActiveCard = (id) => {
    if(id === active) {
      setActive(null)
    }else {
      setActive(id)
    }
  };

  return (
    <div onClick={() => setActiveCard(id)} style={{backgroundImage: `URL(${image})`}} 
    className={active === id ? 'card active' : "card"}>
      <button className="card__delBtn">
        Del
      </button>
      <button onClick={() => addOption(type)} className="card__type">
        {type}
      </button>
      <div className="card__title">
        {name.substring(0,10)}
      </div>
    </div>
  )
};

export default Card;