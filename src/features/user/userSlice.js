import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getUserAsync = createAsyncThunk(
	'user/getUserAsync',
	async () => {
		const resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
		if (resp.ok) {
			const user = await resp.json();
			return  {user} ;
		}
	}
);

export const addUsercardAsync = createAsyncThunk(
	'user/addUsercardAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ payload }),
		});

		if (resp.ok) {
			const user = await resp.json();
			return { user };
		}
	}
);

export const updateUserAsync = createAsyncThunk(
	'user/updateUserAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const user = await resp.json();
			return { user };
		}
	}
);

export const deleteUserCardAsync = createAsyncThunk(
	'user/deleteUserCardAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState:  {
        id="",
        username: "",
        cards: [],
        value: 0,
    },
	reducers: {
        addUserCard: (state, action) => {

            state.cards.push(action.payload.cardsfs);
        },
	},
	extraReducers: {
		[getUserAsync.fulfilled]: (state, action) => {
			return action.payload.user;
		},
		
	},
});


// Action creators are generated for each case reducer function
export const { addUserCard, deleteUserCard, updateUserCard, UserCardsAmountValue } = userSlice.actions

export default userSlice.reducer;