import {createPlugin} from 'fusion-core';
import {TodosToken} from '../plugins/todos';

const nextId = (todos = []) => {
  return Math.max(-1, todos.map(todo => todo.id)) + 1;
};

export default createPlugin({
  deps: {Todos: TodosToken},
  provides: ({Todos}) => ({
    create: async ({title}, ctx) => {
      try {
        const oldTodos = Todos.from(ctx);
        const todos = [
          ...oldTodos,
          {id: await nextId(oldTodos), title, completed: false}
        ];

        Todos.save(ctx, todos);

        return {todos};
      } catch (e) {
        console.log(e.message);
      }
    },
    changeNewTitle: async ({title}, _ctx) => ({title}),
    toggle: async ({id}, ctx) => {
      const todos = Todos.from(ctx).map(todo => {
        if (todo.id === id) { todo.completed = !todo.completed; }
        return todo;
      });
      const todo = todos.find(todo => todo.id === id);

      Todos.save(ctx, todos);

      return {todo};
    },
    deleteOne: async ({id}, ctx) => {
      const todos = Todos.from(ctx).filter((todo) => todo.id !== id);
      Todos.save(ctx, todos);

      return {todos};
    },
    clearCompleted: async (_payload, ctx) => {
      const todos = Todos.from(ctx).filter((todo) => !todo.completed);
      Todos.save(ctx, todos);

      return {todos};
    },
    chooseFilter: async ({filter}, _ctx) => ({filter}),
    loadTodos: async ({}, ctx) => {
      return {todos: Todos.from(ctx)};
    }
  })
})
