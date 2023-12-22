import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iconDisplay: false,
    iconDisplayCircle: false,
    enter: false,
    position: { x: "", y: "" },
    cursorType: "",
}

const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        iconShowHide: (state) => {
            state.iconDisplay = !state.iconDisplay;
            // console.log(state.iconDisplay, payload, "hide show")
        },
        iconShow: (state, { payload }) => {
            if (payload.type === "circle") {
                state.iconDisplayCircle = true;
            } else {
                // console.log(state.iconDisplay, payload)
                state.iconDisplay = true;
            }
        },
        iconHide: (state, { payload }) => {
            if (payload.type === "circle") {
                state.iconDisplayCircle = false;
            } else {
                state.iconDisplay = false;
            }
            // console.log(state.iconDisplay, payload)
        },
        cursorEnter: (state) => {
            state.enter = true
        },
        cursorLeave: (state) => {
            state.enter = false
        },
        handlePosition: (state, { payload }) => {
            state.position.x = payload.x;
            state.position.y = payload.y;
        }
    }
})

console.log("cursorSlice => ", cursorSlice)

export const { iconHide, iconShow, iconShowHide, cursorEnter, cursorLeave, handlePosition } = cursorSlice.actions;

export default cursorSlice.reducer;