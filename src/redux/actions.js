import { createAsyncThunk } from "@reduxjs/toolkit";
import { cardsService } from "../services/cardsService";


export const getCardsThunk = createAsyncThunk("cards", async function () {
  const response = await cardsService.getCards();
  const data = await response.data
  return data;
});
