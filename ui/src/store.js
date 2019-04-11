import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeGivenLetter: [],
    letter: [],
    failLetter: 0,
    update: 0,
    endGame: false,
    win: false,
    gameRule: false
  }
})
