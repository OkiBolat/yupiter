import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Main from "../components/Main";
import styles from'../styles/home.module.scss';

const Home = () => {
  const cards = useSelector(state => state.cards.filteredCards);
  const option = useSelector(state => state.cards.filteredOption)
  const cardsWithFilters = useMemo(() => {
    if (option !== '') {
      return cards.filter(card => card.type === option)
    }
    return cards
  }, [cards, option]);
  return (
    <div className={styles.home}>
      <Header />
      <Main cards={cardsWithFilters} />
    </div>
  )
};

export default Home;