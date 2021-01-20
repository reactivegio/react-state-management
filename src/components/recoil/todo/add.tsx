import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "./index";
import TodoInterface from "./interface";

const List = () => {

    const [newTodo, setNewTodo] = useState("");
    const todoList = useRecoilValue(todoListState);
    const addTodo = useSetRecoilState(todoListState);

    return (
        <div className="add-section">
            <input value={newTodo} onChange={(event) => { setNewTodo(event.currentTarget.value) }} className="input-add" placeholder="Add a new todo" />
            <button className="green-btn" onClick={() => {
                const cloneState = [...todoList];
                const newItem = {
                    id: todoList.length === 0 ? 1 : Math.max.apply(Math, (todoList as TodoInterface[]).map(function (o) { return o.id; })) + 1,
                    title: newTodo,
                    isCompleted: false
                }
                cloneState.push(newItem);

                addTodo(cloneState);
                setNewTodo("");
            }}>ADD</button>
        </div>
    );
};

export default List;
