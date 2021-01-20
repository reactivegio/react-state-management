import React, { useEffect, useState } from "react";
import TodoInterface from "./interface";
import GoBack from "../../common/goback";
import List from "./list";

import "../../../style/style-todo.css";



/**
 * The basic idea is to propagate props to children nad manage the state in this component root
 */
const Todo: React.FC = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState<TodoInterface[] | []>([]);


    useEffect(() => {
        const storage = localStorage.getItem("todoDB");
        let initial = [];
        if (storage) {
            initial = JSON.parse(storage);
        }
        const initialState = initial;
        setTodoList(initialState)
    }, []);


    useEffect(() => {
        localStorage.setItem("todoDB", JSON.stringify(todoList));
    }, [todoList, todoList.length]);

    /**
     * Add a new task in todo list
     * @param newVal string with title of the new todo item
     */
    const addNewTodo = (newVal: string) => {
        const cloneList = [...todoList];
        const newTodo = {
            id: todoList.length === 0 ? 1 : Math.max.apply(Math, (todoList as TodoInterface[]).map(function (o) { return o.id; })) + 1,
            title: newVal,
            isCompleted: false
        }
        cloneList.push(newTodo);
        setTodoList(cloneList);
        setNewTodo("");
    }

    const removeTask = (id: number) => {
        const cloneList = [...todoList];
        const filtered = cloneList.filter(el => el.id !== id)
        setTodoList(filtered);
    }

    const setCompletedTask = (id: number) => {
        const cloneState = [...todoList];
        let currentTask = cloneState.find(el => el.id === id);
        if (currentTask)
            currentTask["isCompleted"] = !currentTask?.isCompleted;
        setTodoList(cloneState);
    }


    return (
        <div className="container">
            <div className="flex-todo">
                <GoBack />
                <List removeTask={removeTask} setCompletedTask={setCompletedTask} todoList={todoList} />
                <div className="add-section">
                    <input value={newTodo} onChange={(event) => { setNewTodo(event.currentTarget.value) }} className="input-add" placeholder="Add a new todo" />
                    <button className="green-btn" onClick={() => addNewTodo(newTodo)}>ADD</button>
                </div>
            </div>
        </div >
    );
}

export default Todo;
