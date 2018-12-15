const Mutations = {
  async createItem(parents, args, ctx, info) {
    const item = ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem(parent, arsgs, ctx, info) {}
};

module.exports = Mutations;
