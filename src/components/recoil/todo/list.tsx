import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./index";
import EmptyList from "../../common/emptyList";
import Item from "./item";
import TodoInterface from "./interface";


const List = () => {

  const todoList = useRecoilValue(todoListState);

  return (
    <div className="content">
      {(todoList as TodoInterface[]).map((el: TodoInterface) => {
        return (<Item elem={el} />)
      })}

      {todoList.length === 0 && <EmptyList />}
    </div>
  );
};

export default List;
