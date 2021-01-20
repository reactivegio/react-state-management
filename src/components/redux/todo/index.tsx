import React from "react";
import { Provider } from "react-redux";
import { store } from "./reducer";
import AddTodo from "./add";
import GoBack from "../../common/goback";
import List from "./list";

import "../../../style/style-todo.css";


const Todo: React.FC = () => {

    return (
        <div className="container">
            <Provider store={store}>
                <div className="flex-todo">
                    <GoBack />
                    <List />
                    <AddTodo />
                </div>
            </Provider>
        </div >
    );
}

export default Todo;
