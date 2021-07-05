import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getCoinsAsync = createAsyncThunk(
	'coins/getCoinsAsync',
	async () => {
		const resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
		if (resp.ok) {
			const coins = await resp.json();
			return  {coins} ;
		}
	}
);


export const coinSlice = createSlice({
	name: 'coins',
	initialState: [],
	reducers: {
		
	},
	extraReducers: {
		[getCoinsAsync.fulfilled]: (state, action) => {
			return action.payload.coins;
		},
		
	},
});

export const { firstFive } = coinSlice.actions;

export default coinSlice.reducer;