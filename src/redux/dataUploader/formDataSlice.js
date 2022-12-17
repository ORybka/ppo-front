import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
    name: 'dataUploader',
    initialState: {
        value: 0,
        currentUserId: '',
    },
    reducers: {
        setId: (state, action) => {
            state.currentUserId = action.payload
        },
    },
})

export const { setId } = formDataSlice.actions;

export default formDataSlice.reducer;