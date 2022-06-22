import React, { useState } from 'react';
import { filter } from '../constants/filter';
import cn from 'classnames';

import styles from '../styles/filter.module.scss';

const Filter = ({addOption}) => {
  const [active, setActive] = useState('')
  const getOption = (option) => {
    if(active === option) {
      setActive('')
    }else {
      setActive(option)
    }
    addOption(option)
  }
  return (
    <ul className={styles.filter}>
      {filter.map((item, index) => <li
        key={index}
        className={cn(styles.filter__item, active === item && styles.active)
        }
        // className={active === item ? 'filter__item active' : "filter__item"}
        onClick={() => getOption(item)}
        >{item
        }</li>)}
    </ul>
  )
};

export default Filter;
