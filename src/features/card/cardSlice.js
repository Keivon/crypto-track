import { createSlice } from '@reduxjs/toolkit';


export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards:[]
  },
  reducers: {

    getCards: (state, action) => {
        if(action.payload.logIn) {
        
        } else {
        state.display = 1;
        state.value = 0;
        state.coinName = action.payload.coinName;
        state.coinImage = action.payload.coinImage;
        state.currentPrice = action.payload.currentPrice;
        }

    },
    modalClose: (state) => {
      state.display = 0;
      state.value = 0;
      state.coinName = "";
      state.coinImage = "";
      state.currentPrice = "";
  },

  },
})

// Action creators are generated for each case reducer function
export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer