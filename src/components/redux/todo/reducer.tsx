import React from "react";
import { combineReducers, configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import TodoInterface from "./interface";

export const addTodo = createAction<TodoInterface[]>('ADD_TODO');
export const removeTodo = createAction<TodoInterface[]>('REMOVE_TODO');
export const completeTodo = createAction<TodoInterface[]>('COMPLETE_TODO');


const storage = localStorage.getItem("todoDB");
let initial = [];
if (storage) {
    initial = JSON.parse(storage);
}
const initialState = initial;


export const todosReducer = createReducer(initialState, {
    [addTodo.type]: (state: TodoInterface[] | [], action): TodoInterface[] => {
        const cloneState = [...state];
        const newTodo = {
            id: state.length === 0 ? 1 : Math.max.apply(Math, (state as TodoInterface[]).map(function (o) { return o.id; })) + 1,
            title: action.value,
            isCompleted: false
        }
        cloneState.push(newTodo);
        return cloneState;
    },
    [removeTodo.type]: (state: TodoInterface[] | [], action): TodoInterface[] => {
        const filtered = state.filter(el => el.id !== action.id)
        return filtered;
    },
    [completeTodo.type]: (state: TodoInterface[] | [], action): TodoInterface[] => {
        let currentTask = state.find(el => el.id === action.id);
        if (currentTask)
            currentTask["isCompleted"] = !currentTask?.isCompleted;

        return state;
    },
})

const rootReducer = combineReducers({
    todoList: todosReducer
});

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
