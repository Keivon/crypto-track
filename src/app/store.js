import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import coinReducer from '../features/coins/coinsSlice';
import cardReducer from '../features/card/cardSlice';

export default configureStore({
  reducer: {
   modal:modalReducer,
   coin:coinReducer,
   card:cardReducer,
  },
})