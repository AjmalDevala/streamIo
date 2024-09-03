// slices/userDataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    email: string;
    image: string;
    sessionActive: boolean;
}

const initialState: UserState = {
    name: "",
    email: "",
    image: "",
    sessionActive: false,
};

const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<{ name: string; email: string; image: string }>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.image = action.payload.image;
            state.sessionActive = true;
        },
        clearUserData: (state) => {
            state.name = "";
            state.email = "";
            state.image = "";
            state.sessionActive = false;
        },
    },
});

export const { setUserData, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
