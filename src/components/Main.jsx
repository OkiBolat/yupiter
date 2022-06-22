import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/main.scss';
import Card from './Card';

const Main = () => {
  const cards = useSelector(state => state.cards.cards)
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__filter">
        </div>
        <div className="main__list">
          {cards?.map(card => <Card type={card.name} title={card.name}/>)}
        </div>
        <button className="main__btn">
          Load more
        </button>
      </div>
    </div>
  )
};

export default Main;
