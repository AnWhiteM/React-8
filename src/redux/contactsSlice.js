import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
import { addContact } from "./operations";
import { deleteContact } from "./operations";

const handlePending = state => {
    state.loading = true;
}
const handleReject = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'tasks',
    initialState: {
            items: [],
            loading: false,
            error: null
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleReject)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleReject)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex((task) => task.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleReject)
    }
})

export const contactsReducer = contactsSlice.reducer;