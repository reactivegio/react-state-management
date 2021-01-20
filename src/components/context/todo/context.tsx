import React, { createContext } from "react";

export type Action = { type: "ADD_TODO", value: string } | { type: "REMOVE_TODO", id: number } | { type: "COMPLETE_TODO", id: number };
export type Dispatch = (action: Action) => void;

export interface TodoState {
    id: number,
    title: string,
    isCompleted: boolean
}

const TodoContext = createContext<{ state: TodoState[] | [], dispatch: Dispatch }>({ state: [], dispatch: () => { } });

export const manageTodo = (state: TodoState[], action: Action) => {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodo = {
                id: state.length === 0 ? 1 : Math.max.apply(Math, state.map(function (o) { return o.id; })) + 1,
                title: action.value,
                isCompleted: false
            }
            state.push(newTodo);
            return state;
        }
        case "REMOVE_TODO": {
            const filtered = state.filter(el => el.id !== action.id)
            return filtered
        }
        case "COMPLETE_TODO": {
            const cloneState = [...state];
            let currentTask = cloneState.find(el => el.id === action.id);
            if (currentTask)
                currentTask["isCompleted"] = !currentTask?.isCompleted;

            return cloneState;
        }
        default:
            return state
    }
}

export default TodoContext;
