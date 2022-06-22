import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { addFilteredOption, deleteCard } from '../redux/reducer'

import  styles from'../styles/main.module.scss';

const Main = ({cards}) => {
  
  const dispatch = useDispatch()
  const addOption = (option) => {
    dispatch(addFilteredOption(option))
  };

  const onDeleteCard = (card) => {
    dispatch(deleteCard(card))
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Filter addOption={addOption} />
        <div className={styles.main__cards}>

          {!cards.length? <h1>No more</h1> : cards.map(card => <Card
            key={card.id}
            addOption={addOption}
            deleteCard={onDeleteCard}
            card={card} />)}
        </div>
        <button className={styles.main__btn}>
          Load more
        </button>
      </div>
    </div>
  )
};

export default Main;
