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
      if(action.payload === state.filteredOption || action.payload === 'Show All') {
        state.filteredOption = ''
        state.filteredCards = state.cards
      }else {
        state.filteredOption = action.payload
      }
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

export const { addFilteredOption, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;