import React from "react";

import { TodoState, Dispatch } from "./context";

const Item = (props: { elem: TodoState, actionDispatch: Dispatch }) => {
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
                onChange={() => {
                    props.actionDispatch({ type: "COMPLETE_TODO", id: props.elem.id });
                }}
                checked={props.elem.isCompleted}
            ></input>
            <label className={"task-name" + (props.elem.isCompleted ? " complete" : "")}>
                {props.elem.title}
            </label>
            <button
                className="task-delete"
                onClick={() => {
                    props.actionDispatch({ type: "REMOVE_TODO", id: props.elem.id });
                }}
            ></button>
        </div>
    );
};

export default Item;
