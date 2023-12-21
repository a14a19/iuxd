import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sliderShow: false,
    sliderName: "",
};

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        displayOnOff: (state) => {
            state.sliderShow = !state.sliderShow
        },
        nameOfSliderComponent: (state, { payload }) => {
            console.log(payload.name, state.sliderShow, state.sliderName, "component name")
            state.sliderShow = !state.sliderShow
            state.sliderName = payload.name
        }
    }
})

console.log("sliderSlice => ", sliderSlice);

export const { displayOnOff, nameOfSliderComponent } = sliderSlice.actions;

export default sliderSlice.reducer;