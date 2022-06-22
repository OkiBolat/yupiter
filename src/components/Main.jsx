/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/extensions
import Card from './Card';
import Filter from './Filter';
import { addFilteredOption, deleteCard } from '../redux/reducer';

import styles from '../styles/main.module.scss';
import { getCardsThunk } from '../redux/actions';
// eslint-disable-next-line import/extensions
import MyLoader from './Loader';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Main = ({ cards }) => {
  const [active, setActive] = useState('');
  const [activeOption, setActiveOption] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const getNewTickets = () => {
    setActive('');
    setActiveOption('');
    dispatch(addFilteredOption(''));
    setPage(page + 1);
    dispatch(getCardsThunk(page + 1));
  };

  const addOption = (option) => {
    dispatch(addFilteredOption(option));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeypress = (e) => {
    console.log(e);
    if (e.keyCode === 46 || e.key === 'BACK_SPACE') {
      if (active) dispatch(deleteCard(active));
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', onKeypress);
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [onKeypress]);

  const onDeleteCard = (card) => {
    dispatch(deleteCard(card));
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Filter
        active={activeOption}
        setActive={setActiveOption}
        addOption={addOption} />
        <div className={styles.main__cards}>
          {!cards?.length ? arr.map((i) => <MyLoader key={i} />) : cards.map((card) => <Card
            isActive={active}
            setIsActive={setActive}
            setActiveOption={setActiveOption}
            key={card.id}
            activeOption={activeOption}
            addOption={addOption}
            deleteCard={onDeleteCard}
            card={card} />)}
        </div>
        <button onClick={getNewTickets} className={styles.main__btn}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Main;
