import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/TaskReducer";

const store = configureStore({
    reducer: reducer
})

export default store;