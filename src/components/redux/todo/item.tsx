import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInterface from "./interface";

const Item = (props: { elem: TodoInterface }) => {
    const dispatch = useDispatch();

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
                    dispatch({ type: "COMPLETE_TODO", id: props.elem.id });
                }}
                checked={props.elem.isCompleted}
            ></input>
            <label className={"task-name" + (props.elem.isCompleted ? " complete" : "")}>
                {props.elem.title}
            </label>
            <button
                className="task-delete"
                onClick={() => {
                    dispatch({ type: "REMOVE_TODO", id: props.elem.id });
                }}
            ></button>
        </div>
    );
};

export default Item;
