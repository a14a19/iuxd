import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sliderShow: false,
    sliderName: "",
};

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        displayOff: (state) => {
            state.sliderShow = false
        },
        nameOfSliderComponent: (state, { payload }) => {
            state.sliderShow = !state.sliderShow
            state.sliderName = payload.name
            console.log(payload.name, state.sliderShow, state.sliderName, "component name")
        }
    }
})

console.log("sliderSlice => ", sliderSlice);

export const { displayOff, nameOfSliderComponent } = sliderSlice.actions;

export default sliderSlice.reducer;