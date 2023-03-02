export default {
  state: {
    rolesList: [
      // { id: 1, name: '超级管理员', status: 1, tips: '超级管理员最屌哦' }
    ],
  },
  getters: {
    rolesList(state) {
      return state.rolesList;
    },
  },
  mutations: {
    ADD_ROLES_LIST(state, data) {
      console.log(data, 888);
      state.rolesList.push(data);
    },
    DEL_ROLES_LIST(state, data) {
      state.rolesList = state.rolesList.filter((item) => item.id !== data);
    },
    EDIT_ROLES_LIST(state, data) {
      const { id, roles } = data;
      const index = state.rolesList.indexOf((item) => item.id === id);
      state.rolesList.splice(index, 1, roles);
    },
  },
  actions: {},
};
