import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { addFilteredOption, deleteCard } from '../redux/reducer'

import styles from '../styles/main.module.scss';
import { getCardsThunk } from '../redux/actions';

const Main = ({ cards }) => {
  const [active, setActive] = useState('')
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  console.log(typeof active)

  const getNewTickets = () => {
    setPage(page + 1);
    dispatch(getCardsThunk(page + 1));
  };

  const addOption = (option) => {
    dispatch(addFilteredOption(option))
  };
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeypress = e => {
    console.log(e.keyCode)
    if (e.keyCode === 93) {
      if(active) dispatch(deleteCard(active))
    };
  }
  
  useEffect(() => {
    document.addEventListener('keypress', onKeypress);
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [onKeypress]);

  const onDeleteCard = (card) => {
    dispatch(deleteCard(card))
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Filter addOption={addOption} />
        <div className={styles.main__cards}>
          {!cards?.length ? <h1>No more</h1> : cards.map(card => <Card
            isActive={active}
            setIsActive={setActive}
            key={card.id}
            addOption={addOption}
            deleteCard={onDeleteCard}
            card={card} />)}
        </div>
        <button onClick={getNewTickets} className={styles.main__btn}>
          Load more
        </button>
      </div>
    </div>
  )
};

export default Main;
