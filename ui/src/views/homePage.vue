<template lang="html">
  <v-layout id="test" column>
    <v-layout justify-center>
      <h1 class="headerText gameName">{{ gameName }}</h1>
    </v-layout>
    <v-layout v-if="showGame" justify-center>
      <wordComponent
        :hangingmanWord= "hangingmanWord"
        :image= "image"
      ></wordcomponent>
    </v-layout>
    <v-layout justify-center class="startBtn">
      <v-btn
        v-if="!showGame"
        round
        dark
        large
        color="primary"
        @click="randomWord"
      >Start</v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
import wordComponent from '../components/wordComponent.vue'

export default {
  components: {
    wordComponent
  },
  data () {
    return {
      showGame: false,
      gameName: 'Galgje',
      image: '../assets/start.png',
      hangingmanWord: '',
      words: [  'Kippenhok', 'Computer', 'Computer muis', 'Schommelbank', 'Grassprietje',
                  'Alpaca', 'Vliegvakantie', 'Vakantie', 'Website', 'Hondenbakje',
                  'Kreeft', 'Horoscoop', 'Televisie', 'Playstation', 'Gamer',
                  'Winkelwagen', 'Hamburger', 'Tuinbroek', 'Appelsap', 'Birmingham',
                  'Scooter', 'Stopcontactdoos', 'Autobandventieldopje', 'Deurklink', 'Brandweerauto',
                  'Pakeerplaats', 'Huurcontract', 'Koopwoning', 'Programmeertalen', 'Klokwijzer' ]
    }
  },
  methods: {
    randomWord: function() {
      let randomNumber = Math.floor((Math.random() * 29) + 0)
      this.hangingmanWord = this.words[randomNumber]
      this.showGame = true
    }
  }
}
</script>

<style lang="css" scoped>
#test {
  background-image: url("../assets/background.png");

}
</style>
