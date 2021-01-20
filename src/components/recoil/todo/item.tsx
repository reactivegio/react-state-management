import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./index";
import TodoInterface from "./interface";

const Item = (props: { elem: TodoInterface }) => {
    const { elem } = props;

    //const setCompletedTask = useSetRecoilState(todoListState);
    const removeTask = useSetRecoilState(todoListState);
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const replaceItemAtIndex = (arr: TodoInterface[], index: number, newValue: TodoInterface) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    }

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
                    const index = todoList.findIndex((el) => el.id === elem.id);
                    const changedTodo: TodoInterface = {
                        id: todoList[index].id,
                        title: todoList[index].title,
                        isCompleted: !todoList[index].isCompleted,
                    }
                    const newList = replaceItemAtIndex(todoList, index, changedTodo);

                    setTodoList(newList);
                }
                }
                checked={elem.isCompleted}
            ></input>
            <label className={"task-name" + (elem.isCompleted ? " complete" : "")}>
                {elem.title}
            </label>
            <button
                className="task-delete"
                onClick={() => {
                    const filtered = todoList.filter(el => el.id !== elem.id)
                    removeTask(filtered)
                }}
            ></button>
        </div>
    );
};

export default Item;
