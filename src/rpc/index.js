let nextId = 0;

export default {
  create: async ({title}) => ({title, id: nextId++}),
  changeNewTitle: async ({title}) => ({title}),
  toggle: async ({id}) => ({id}),
  deleteOne: async ({id}) => ({id}),
  clearCompleted: async () => ({}),
  chooseFilter: async ({filter}) => ({filter})
}
