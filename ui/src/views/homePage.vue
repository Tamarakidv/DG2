<template lang="html">
  <v-layout column>
    <v-layout justify-center>
      <h1 class="headerText">{{ gameName }}</h1>
    </v-layout>
    <v-layout justify-center>
      <wordComponent
        :hangingmanWord= "hangingmanWord"
      ></wordcomponent>
    </v-layout>
    <v-layout justify-center>
      <v-btn @click="randomWord">Start</v-btn>
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
      gameName: 'Galgje',
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
      console.log(this.hangingmanWord)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
