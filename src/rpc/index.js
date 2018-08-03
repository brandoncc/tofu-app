let nextId = 0;

export default {
  create: async ({title}) => {
    return {title, id: nextId++};
  },
  changeNewTitle: async ({title}) => {
    return {title};
  }
}
