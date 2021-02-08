import React from "react";

import { Todo } from "./todo.model";
import { deleteTodo, toggleTodo } from "./todo.service";

const Item = (props: { elem: Todo }) => {
    const { elem } = props;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #FFF",
            }}
        >
            <input
                className="task-status"
                type="checkbox"
                onChange={() => toggleTodo(elem.id)}
                checked={elem.isCompleted}
            ></input>
            <label className={"task-name" + (elem.isCompleted ? " complete" : "")}>
                {elem.text}
            </label>
            <button
                className="task-delete"
                onClick={() => deleteTodo(elem.id)}
            ></button>
        </div>
    );
};

export default Item;
