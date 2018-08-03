export const all = (state) => state.todos;
export const completed = (state) => state.todos.filter(todo => todo.completed);
export const incomplete = (state) => state.todos.filter(todo => !todo.completed);
