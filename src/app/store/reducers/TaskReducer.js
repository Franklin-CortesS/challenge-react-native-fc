import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksReducer = createSlice({
    name: "task", initialState, reducers: {
        addTasks: (state, action) => {
            state.push(action.payload);
            return state;
        }
    }
})

export const { addTasks } = tasksReducer.actions;
export const reducer = tasksReducer.reducer;