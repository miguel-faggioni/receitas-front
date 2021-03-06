import axios from 'axios'

export default {
  namespaced: true,
  state: {
    ingredients: [],
  },
  mutations: {
    // synchronous
    set(state, ingredients) {
      state.ingredients = ingredients
    },
  },
  actions: {
    // asynchronous
    async get(context, params) {
      let response = await axios.get('/my-ingredients', { params })
      context.commit('set', response.data)
      return response.data
    },
    async getFields(context) {
      let response = await axios.get('/my-ingredients/fields')
      return response.data
    },
    async add(context, { id }) {
      await axios.patch('/my-ingredients', {
        add: [id],
      })
    },
    async remove(context, { id }) {
      await axios.patch('/my-ingredients', {
        remove: [id],
      })
    },
  },
  modules: {},
  getters: {},
}
