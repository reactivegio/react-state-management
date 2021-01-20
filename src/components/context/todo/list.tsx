import React, { useContext } from "react";
import EmptyList from "../../common/emptyList";
import Item from "./item";
import TodoContext, { TodoState } from "./context";

const List = () => {
  const todoList = useContext(TodoContext);

  return (
    <div className="content">
      {(todoList.state as TodoState[]).map((el: TodoState) => {
        return (<Item elem={el} actionDispatch={todoList.dispatch} />)
      })}

      {todoList.state.length === 0 && <EmptyList />}
    </div>
  );
};

export default List;
