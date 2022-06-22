import React, { useState } from 'react';
import { filter } from '../constants/filter';

import '../styles/filter.scss';

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
    <ul className="filter">
      {filter.map((item, index) => <li
        key={index}
        className={active === item ? 'filter__item active' : "filter__item"}
        onClick={() => getOption(item)}
        >{item
        }</li>)}
    </ul>
  )
};

export default Filter;
