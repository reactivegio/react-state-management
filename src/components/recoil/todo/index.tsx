import React from "react";
import { atom, RecoilRoot } from "recoil";
import TodoInterface from "./interface";
import GoBack from "../../common/goback";
import Add from "./add";
import List from "./list";

import "../../../style/style-todo.css";

const storage = localStorage.getItem("todoDB");
let initial = [];
if (storage) {
    initial = JSON.parse(storage);
}
const initialState = initial;

export const todoListState = atom<TodoInterface[] | []>({
    key: "todoList",
    default: initialState
});

/**
 * The basic idea is to propagate props to children nad manage the state in this component root
 */
const Todo: React.FC = () => {

    return (
        <RecoilRoot>
            <div className="container">
                <div className="flex-todo">
                    <GoBack />
                    <List />
                    <Add />
                </div>
            </div >
        </RecoilRoot>
    );
}

export default Todo;
