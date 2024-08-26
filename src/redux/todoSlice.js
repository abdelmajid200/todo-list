// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                isDone: false,
            });
        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        editTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.description = action.payload.description;
            }
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, toggleTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
