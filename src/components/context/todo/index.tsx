import React, { useEffect, useReducer, useState } from "react";
import TodoContext, { manageTodo } from "./context";
import GoBack from "../../common/goback";
import List from "./list";

import "../../../style/style-todo.css";

const storage = localStorage.getItem("todoDB");
let initial = [];
if (storage) {
    initial = JSON.parse(storage);
}
const initialState = initial;

const Todo: React.FC = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(manageTodo, initialState);


    useEffect(() => {
        localStorage.setItem("todoDB", JSON.stringify(state));
    }, [state, state.length]);


    return (
        <div className="container">
            <TodoContext.Provider value={{ state, dispatch }}>
                <div className="flex-todo">
                    <GoBack />
                    <List />
                    <div className="add-section">
                        <input value={newTodo} onChange={(event) => { setNewTodo(event.currentTarget.value) }} className="input-add" placeholder="Add a new todo" />
                        <button className="green-btn" onClick={() => { dispatch({ type: "ADD_TODO", value: newTodo }); setNewTodo(""); }}>ADD</button>
                    </div>
                </div>
            </TodoContext.Provider>
        </div >
    );
}

export default Todo;
