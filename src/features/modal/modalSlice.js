import { createSlice } from '@reduxjs/toolkit';


export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    display: 0,
    amount: 0,
    coinName: "",
    coinImage: "",
    currentPrice: 0,
  },
  reducers: {

    modalOpen: (state, action) => {
        state.display = 1;
        state.amount = 0;
        state.coinName = action.payload.coinName;
        state.coinImage = action.payload.coinImage;
        state.currentPrice = action.payload.currentPrice;

    },
    modalClose: (state) => {
      state.display = 0;
      state.amount = 0;
      state.coinName = "";
      state.coinImage = "";
      state.currentPrice = "";
  },

  },
})

// Action creators are generated for each case reducer function
export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer