import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';



export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: [],
        value: 0,
    },
    reducers: {
        addCard: (state, action) => {
            const card = {
                amount : action.payload.amount,
                coinName : action.payload.coinName,
                coinImage : action.payload.coinImage,
                currentPrice : action.payload.currentPrice,
                id : nanoid(),
            };
            state.cards.push(card);
        },


        deleteCard: (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload.id);
        },
        cardsAmountValue:(state) => {
            state.value = state.cards.reduce((acc, curr) => acc + (curr.amount * curr.currentPrice),0);
        },
        updateCard: (state, action) => {
            const index = state.cards.findIndex((card) => (
                card.id === action.payload.id));
            state.cards[index].amount = action.payload.amount;
            if(state[index].amount < 0) state[index].amount = 0;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addCard, deleteCard, updateCard, cardsAmountValue } = cardSlice.actions

export default cardSlice.reducer