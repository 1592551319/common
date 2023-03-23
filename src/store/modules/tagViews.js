export default {
  state: {
    tagViews: [],
    activeViews: {}
  },
  getters: {
    tagViews(state) {
      return state.tagViews
    },
    activeViews(state) {
      return state.activeViews
    }
  },
  mutations: {
    SET_TAG_VIEWS(state, data) {
      const no_need = ['Login', 'homeIndex', '404']
      state.activeViews = data
      if (no_need.includes(data.name)) return
      if (!state.tagViews.length) {
        state.tagViews = [data]
      } else {
        const exists = state.tagViews.find((tag) => tag.name === data.name)
        if (!exists) {
          state.tagViews.push(data)
        }
      }
    },
    DEL_TAG_VIEWS(state, data) {
      state.tagViews = state.tagViews.filter((tag) => tag.name !== data)
    },
    CLEAR_TAG_ALL(state) {
      state.tagViews = []
    }
  },
  actions: {}
}
