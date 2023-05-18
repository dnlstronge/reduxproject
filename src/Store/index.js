import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UI-slice";

configureStore(
    {
        reducer: {ui: uiSlice}
    }
)