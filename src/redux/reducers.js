import cardsSlice from './reducer';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  cards: cardsSlice,

});

export default rootReducer;