import { createEntityQuery } from "@datorama/akita";
import { combineLatest } from "rxjs"; // create observable instead of register event listner

import { TodosState, todosStore } from "./todo.store";
import { Todo } from "./todo.model";

export const todosQuery = createEntityQuery<TodosState>(todosStore);

export const selectVisibilityFilter$ = todosQuery.select(
  (state) => state.filter
);

export const selectVisibleTodos = combineLatest(
  selectVisibilityFilter$,
  todosQuery.selectAll(),
  function getVisibleTodos(filter, todos): Todo[] {
    switch (filter) {
      case "SHOW_COMPLETED":
        return todos.filter((t) => t.isCompleted);
      case "SHOW_ACTIVE":
        return todos.filter((t) => !t.isCompleted);
      default:
        return todos;
    }
  }
);
