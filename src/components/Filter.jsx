// eslint-disable-next-line no-unused-vars
import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { filter } from '../constants/filter';
import styles from '../styles/filter.module.scss';
import { addFilteredOptionWithSelet } from '../redux/reducer';

const Filter = ({ addOption, active, setActive }) => {
  const dispatch = useDispatch();
  const getOption = (option) => {
    if (active === option) {
      setActive('');
    } else {
      setActive(option);
    }
    addOption(option);
  };

  const getSelectedOption = (option) => {
    setActive(option);
    dispatch(addFilteredOptionWithSelet(option));
  };

  return (<>
    <ul className={styles.filter}>
      <select onChange={(e) => getSelectedOption(e.target.value)} value={active} className={styles.filter__selection} name="" id="">
        {filter.map((option, index) => <option key={index} value={option}>{option}</option>)}
      </select>
      {filter.map((item, index) => <li
        key={index}
        className={cn(styles.filter__item, active === item && styles.active)}
        onClick={() => getOption(item)}
      >{item}</li>)}
    </ul>
  </>
  );
};
export default Filter;
