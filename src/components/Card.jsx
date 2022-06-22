import React, { useState } from 'react';
import cn from 'classnames';
import styles from'../styles/card.module.scss';

const Card = ({card, addOption, deleteCard }) => {
  const[active, setActive] = useState(null)

  const { type, name, image, id} = card;

  const setActiveCard = (id) => {
    if(id === active) {
      setActive(null)
    }else {
      setActive(id)
    }
  };

  const onDeleteCard = (id) => {
    // e.target.stopPropagation()
    deleteCard(id)
  }

  return (
    <div 
    onClick={() => setActiveCard(id)} style={{backgroundImage: `URL(${image})`}} 
    className={cn(styles.card, id === active && styles.active)
    }>
      <button
      onClick={() => onDeleteCard(id)}
       className={cn(id !== active? styles.card__delBtn: styles.hiddenBtn )}>
        Del
      </button>
      <button onClick={() => addOption(type)} className={styles.card__type}>
        {type}
      </button>
      <div className={styles.card__title}>
        {name.substring(0,10)}
      </div>
    </div>
  )
};

export default Card;