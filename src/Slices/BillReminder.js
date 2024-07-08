import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    data: null,
    loading: false,
};

const billReminderSlice = createSlice({
    name:"billReminder",
    initialState: initialState,
    reducers: {
        setBillReminderdata(state, value) {
            state.data = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setBillReminderdata, setLoading} = billReminderSlice.actions;
export default billReminderSlice.reducer;