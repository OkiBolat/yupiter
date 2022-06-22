import React, { useState } from 'react';
import { filter } from '../constants/filter';
import cn from 'classnames';

import styles from '../styles/filter.module.scss';
import { addFilteredOptionWithSelet } from '../redux/reducer';
import { useDispatch } from 'react-redux';

const Filter = ({ addOption }) => {
  const [active, setActive] = useState('')
  const dispatch = useDispatch()
  const getOption = (option) => {
    if (active === option) {
      setActive('')
    } else {
      setActive(option)
    }
    addOption(option)
  };

  const getSelectedOption = (option) => {
    setActive(option)
    dispatch(addFilteredOptionWithSelet(option))
  };


  return (<>
    <ul className={styles.filter}>
      <select onChange={(e) => getSelectedOption(e.target.value)} value={active} className={styles.filter__selection} name="" id="">
        {filter.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
      {filter.map((item, index) => <li
        key={index}
        className={cn(styles.filter__item, active === item && styles.active)
        }
        onClick={() => getOption(item)}
      >{item
        }</li>)}
    </ul>
  </>
  )
};

export default Filter;
