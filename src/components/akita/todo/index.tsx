import React, { useEffect, useState } from "react";
import * as todosService from './todo.service';
import { selectVisibleTodos } from './todo.query';
import { Todo } from "./todo.model";
import AddTodo from "./add";
import GoBack from "../../common/goback";
//import List from "./list";

import "../../../style/style-todo.css";
import Item from "./item";

const TodoApp: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);


    useEffect(() => {
        // subscribe to home component messages
        const subscription = selectVisibleTodos.subscribe(list => {
            if (list) {
                // add message to local state if not empty
                setTodos(list);
            } else {
                // clear messages when empty message received
                setTodos([]);
            }
        });

        // return unsubscribe method to execute when component unmounts
        return subscription.unsubscribe;
    }, []);

    return (
        <div className="container">
            <div className="flex-todo">
                <GoBack />
                <div className="content">
                    {(todos as Todo[]).map(todo => (
                        <Item key={"todo_" + todo.id} elem={todo}></Item>
                    ))}
                </div>
                <AddTodo onAdd={todosService.addTodo} />
            </div>
        </div >
    );
}

export default TodoApp;
