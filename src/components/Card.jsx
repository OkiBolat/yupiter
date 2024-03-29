// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from 'classnames';
import styles from '../styles/card.module.scss';

const Card = ({
  card, addOption, isActive, setIsActive, activeOption, setActiveOption
}) => {
  const {
    type, name, image, id,
  } = card;

  // eslint-disable-next-line no-shadow
  const setActiveCard = (id) => {
    if (Number(id) === Number(isActive)) {
      setIsActive(null);
    } else {
      setIsActive(id);
    }
  };

  const onAddOption = (e, option) => {
    e.stopPropagation();

    if (activeOption === option) {
      setActiveOption('')
      addOption('');
    } else {
      addOption(option);
      setActiveOption(option)
    }
  };

  return (
    <div
    onClick={() => setActiveCard(id)} style={{ backgroundImage: `URL(${image})` }}
    className={cn(styles.card, id === isActive && styles.active)
    }>
      <button onClick={(e) => onAddOption(e, type)} className={styles.card__type}>
        {type}
      </button>
      <div className={styles.card__title}>
        {name.substring(0, 10)}
      </div>
    </div>
  );
};

export default Card;
