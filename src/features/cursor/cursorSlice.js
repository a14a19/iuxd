import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iconDisplay: false,
    enter: false,
    position: { x: "", y: "" },
}

const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        iconShowHide: (state) => {
            state.iconDisplay = !state.iconDisplay;
            // console.log(state.iconDisplay, payload, "hide show")
        },
        iconShow: (state) => {
            state.iconDisplay = true;
            // console.log(state.iconDisplay, payload)
        },
        iconHide: (state) => {
            state.iconDisplay = false;
            // console.log(state.iconDisplay, payload)
        },
        cursorEnter: (state) => {
            state.enter = !state.enter
        },
        handlePosition: (state, { payload }) => {
            state.position.x = payload.x;
            state.position.y = payload.y;
        }
    }
})

console.log("cursorSlice => ", cursorSlice)

export const { iconHide, iconShow, iconShowHide, cursorEnter, handlePosition } = cursorSlice.actions;

export default cursorSlice.reducer;