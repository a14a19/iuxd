import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iconDisplay: false,
}

const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        iconShowHide: (state, { payload }) => {
            state.iconDisplay = !state.iconDisplay;
            console.log(state.iconDisplay, payload, "hide show")
        },
        iconShow: (state, { payload }) => {
            state.iconDisplay = true;
            console.log(state.iconDisplay, payload)
        },
        iconHide: (state, { payload }) => {
            state.iconDisplay = false;
            console.log(state.iconDisplay, payload)
        }
    }
})

console.log("cursorSlice => ", cursorSlice)

export const { iconHide, iconShow, iconShowHide } = cursorSlice.actions;

export default cursorSlice.reducer;