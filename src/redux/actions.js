import { createAsyncThunk } from "@reduxjs/toolkit";
import { cardsService } from "../services/cardsService";


export const getCardsThunk = createAsyncThunk("cards", async function (pages) {
  const response = await cardsService.getCards(pages);
  const data = await response.data
  return data;
});
