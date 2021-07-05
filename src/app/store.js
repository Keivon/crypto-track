import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import coinReducer from '../features/coins/coinsSlice';

export default configureStore({
  reducer: {
   modal:modalReducer,
   coin:coinReducer,
   
  },
})