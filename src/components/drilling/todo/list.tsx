import React from "react";
import EmptyList from "../../common/emptyList";
import Item from "./item";
import TodoInterface from "./interface";


const List = (props: { removeTask: Function, setCompletedTask: Function, todoList: TodoInterface[] }) => {
  const { removeTask, setCompletedTask, todoList } = props;

  return (
    <div className="content">
      {(todoList as TodoInterface[]).map((el: TodoInterface) => {
        return (<Item elem={el} removeTask={removeTask} setCompletedTask={setCompletedTask} />)
      })}

      {todoList.length === 0 && <EmptyList />}
    </div>
  );
};

export default List;
