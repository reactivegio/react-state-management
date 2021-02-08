import { Todo, VISIBILITY_FILTER } from "./todo.model";
import { EntityState, createEntityStore } from "@datorama/akita";

export interface TodosState extends EntityState<Todo, string> {
  filter: VISIBILITY_FILTER;
}

const initialState = {
  filter: VISIBILITY_FILTER.SHOW_ALL,
  list: [],
};

export const todosStore = createEntityStore<TodosState>(initialState, {
  name: "todos",
});
