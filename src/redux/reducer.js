import { createSlice } from '@reduxjs/toolkit';
import { getCardsThunk } from './actions'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    filteredCards: [],
    filteredOption: '',
    sortType: null,
    requestInProgress: false,
  },
  reducers: {
    addFilteredOption (state, action) {
      if(action.payload === state.filteredOption) {
        state.filteredOption = '';
      }else {
        state.filteredOption = action.payload
      }
    },
    addFilteredOptionWithSelet (state, action) {
      state.filteredOption = action.payload
    },
    deleteCard (state, action) {
      state.filteredCards = state.filteredCards.filter(card => Number(card.id) !== Number(action.payload))
    },
  },
  extraReducers: {
    [getCardsThunk.pending]: (state) => {
      state.requestInProgress = true
    },
    [getCardsThunk.fulfilled]: (state, action) => {
      state.cards = [...state.cards, ...action.payload];
      state.filteredCards = state.cards
      state.requestInProgress = false
    },
    [getCardsThunk.rejected]: () => {
      console.error("Not response")
    },
  }
});

export const {addFilteredOptionWithSelet, addFilteredOption, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;