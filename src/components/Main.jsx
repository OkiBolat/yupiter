import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { addFilteredOption } from '../redux/reducer'

import '../styles/main.scss';

const Main = () => {
  const cards = useSelector(state => state.cards.filteredCards);
  const option = useSelector(state => state.cards.filteredOption)
  const cardsWithFilters = useMemo(() => {
    if (option !== '') {
      return cards.filter(card => card.type === option)
    }
    return cards
  }, [cards, option])

  const dispatch = useDispatch()

  const addOption = (option) => {
    dispatch(addFilteredOption(option))
  };

  return (
    <div className="main">
      <div className="main__container">
        <Filter addOption={addOption} />
        <div className="main__cards">

          {!cardsWithFilters.length? <h1>No more</h1> : cardsWithFilters.map(card => <Card
            key={card.id}
            addOption={addOption}
            card={card} />)}
        </div>
        <button className="main__btn">
          Load more
        </button>
      </div>
    </div>
  )
};

export default Main;
