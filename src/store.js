import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: undefined,
    clickedCard: undefined,
    fightingCards: {
      playerId: "",
      playerCardId: "",
      opponentId: "",
      opponentCardId: ""
    }
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setPlayerCard(state, data) {
      state.fightingCards.playerId = data.playerId
      state.fightingCards.playerCardId = data.playerCardId
    },
    setEnemyCard(state, data) {
      state.fightingCards.opponentId = data.opponentId
      state.fightingCards.opponentCardId = data.opponentCardId
    },

  },
  actions: {
    startGame({ commit, dispatch }, newGame) {
      gameApi.post('', { gameConfig: newGame })
        .then(res => {
          commit('setGame', res.data)
        })
    },
    updatePlayerCard({ commit, dispatch }, clickedCard) {
      commit('setPlayerCard', clickedCard)
    },
    updateEnemyCard({ commit, dispatch }, clickedCard) {
      commit('setEnemyCard', clickedCard)
    },
    afterAttack({ commit, dispatch }, data) {

      gameApi.put(data.gameId, data.fightingCards)
        .then(res => {
          return gameApi.get(data.gameId)
        }).then(res => {
          commit('setGame', res.data.data)
        })
    }
  }
})
