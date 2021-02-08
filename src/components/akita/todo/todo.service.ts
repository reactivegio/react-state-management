import { todosStore } from "./todo.store";
import { createTodo, VISIBILITY_FILTER } from "./todo.model";

export function updateTodosFilter(filter: VISIBILITY_FILTER) {
  todosStore.update({
    filter,
  });
}

export function toggleTodo(id: string) {
  todosStore.update(id, (entity) => ({ isCompleted: !entity.isCompleted }));
}

export function addTodo(text: string) {
  const todo = createTodo(text);
  todosStore.add(todo);
}

export function deleteTodo(id: string) {
  todosStore.remove(id);
}
