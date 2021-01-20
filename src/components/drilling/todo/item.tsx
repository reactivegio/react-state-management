import React from "react";

import TodoInterface from "./interface";

const Item = (props: { elem: TodoInterface, removeTask: Function, setCompletedTask: Function }) => {
    const { elem, removeTask, setCompletedTask } = props;
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
                onChange={() => setCompletedTask(elem.id)}
                checked={elem.isCompleted}
            ></input>
            <label className={"task-name" + (elem.isCompleted ? " complete" : "")}>
                {elem.title}
            </label>
            <button
                className="task-delete"
                onClick={() => removeTask(elem.id)}
            ></button>
        </div>
    );
};

export default Item;
