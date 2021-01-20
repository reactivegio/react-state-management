import React, { useState } from "react";
import { useDispatch } from "react-redux";

const List = () => {

    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="add-section">
            <input value={newTodo} onChange={(event) => { setNewTodo(event.currentTarget.value) }} className="input-add" placeholder="Add a new todo" />
            <button className="green-btn" onClick={() => { dispatch({ type: "ADD_TODO", value: newTodo }); setNewTodo("") }}>ADD</button>
        </div>
    );
};

export default List;
