import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/sliderSlice";
import cursorReducer from "../features/cursor/cursorSlice";

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        cursor: cursorReducer,
    }
})