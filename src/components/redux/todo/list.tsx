import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./reducer";
import EmptyList from "../../common/emptyList";
import TodoInterface from "./interface";
import Item from "./item";

const List = () => {

  const todoList = useSelector((state: RootState) => state.todoList);


  useEffect(() => {
    localStorage.setItem("todoDB", JSON.stringify(todoList));
  }, [todoList, todoList.length]);


  return (
    <div className="content">
      {(todoList as TodoInterface[]).map((el: TodoInterface) => {
        return (<Item key={"todo_" + el.id} elem={el} />)
      })}

      {todoList.length === 0 && <EmptyList />}
    </div>
  );
};

export default List;
