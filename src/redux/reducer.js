import { createSlice } from '@reduxjs/toolkit';
import { getCardsThunk } from './actions'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    filterParams: {
      stops: [],
      choice: '',
    },
    cards: [],
    filteredCards: [],
    sortType: null,
    requestInProgress: false,
  },
  reducers: {
    getCardsByFilter (state, action) {
      state.filteredCards = state.cards.cards.filter(img => img.type === action.payload)
    },
    deleteCard (state, action) {
      state.filteredCards = state.cards.filter(img => img.id !== action.payload)
    },
  },
  extraReducers: {
    [getCardsThunk.pending]: (state) => {
      state.requestInProgress = true
    },
    [getCardsThunk.fulfilled]: (state, action) => {
      state.cards = action.payload;
      state.filteredCards = action.payload;
      state.requestInProgress = false
    },
    [getCardsThunk.rejected]: () => {
      console.error("Not response")
    },
  }
});

export const { getCardsByFilter, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;