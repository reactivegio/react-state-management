import React, { useState } from "react";

type AddTodoProps = {
    onAdd(text: string): void;
};

const Add = ({ onAdd }: AddTodoProps) => {
    const [newTodo, setNewTodo] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (newTodo) {
                    onAdd(newTodo);
                    setNewTodo("");
                }
            }}
        >
            <div className="add-section">
                <input
                    value={newTodo}
                    onChange={(event) => {
                        setNewTodo(event.currentTarget.value);
                    }}
                    className="input-add"
                    placeholder="Add a new todo"
                />
                <button
                    className="green-btn"
                    type="submit"
                >
                    ADD
        </button>
            </div>
        </form>
    );
};

export default Add;
