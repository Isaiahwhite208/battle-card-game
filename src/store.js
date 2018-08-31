import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    newGame(state, game) {
      state.game = game
      router.push({ name: 'game', params: { id: game.id } })
    }
  },
  actions: {
    startGame({ commit, dispatch }, name) {
      let gameConfig = {
        "playerName": name,
        "opponents": 1,
        "set": Math.floor(Math.random() * 4) + 1
      }
      api.post('', gameConfig).then(res => {
        console.log(res)
        commit('newGame', res.data)
      })
    },
    getGame({ commit, dispatch }, gameId) {
      api.get('' + gameId).then(res => {
        commit('newGame', res.data.data)
      })
    },
    fight({ commit, dispatch, state }, fightObj) {
      let gameId = state.game.id
      api.put('' + gameId, fightObj).then(res => {
        console.log(res)
        dispatch('getGame', gameId)
      })
    }
  }
})
