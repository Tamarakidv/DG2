<template lang="html">
  <v-layout id="background" column>
    <v-layout justify-center>
      <img :src="require('@/assets/'+ logo)" class="logo" />
    </v-layout>
    <v-layout v-if="showGame" justify-center>
      <wordComponent
        :hangingmanWord= "hangingmanWord"
        :image= "image"
        :guessedText= "guessedText"
      ></wordcomponent>
    </v-layout>
    <v-layout>
      <v-flex offset-xs3>
        <img :src="require('@/assets/'+ startImage)" class="gameboard" v-if="!showGame">
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout justify-center>
        <v-btn
          v-if="!showGame"
          round
          dark
          large
          color="primary"
          @click="randomWord"
        >Start</v-btn>
        <v-btn
          v-if="!showGame"
          round
          dark
          large
          color="primary"
          @click="gameRules"
        >regels</v-btn>
      </v-layout>
    </v-container>
    <dialogComp/>
  </v-layout>
</template>

<script>
import wordComponent from '../components/wordComponent.vue'
import dialogComp from '../components/base/BaseDialogComponentRules.vue'

export default {
  components: {
    wordComponent,
    dialogComp
  },
  data () {
    return {
      logo: 'galgLogo.png',
      startImage: 'startPage.png',
      showGame: false,
      gameName: 'Galgje',
      image: '../assets/start.png',
      guessedText: 'guessedLetters.png',
      hangingmanWord: '',
      words: [  'Kippenhok', 'Computer', 'Computer muis', 'Schommelbank', 'Grassprietje',
                  'Alpaca', 'Vliegvakantie', 'Vakantie', 'Website', 'Hondenbakje',
                  'Kreeft', 'Horoscoop', 'Televisie', 'Playstation', 'Gamer',
                  'Winkelwagen', 'Hamburger', 'Tuinbroek', 'Appelsap', 'Birmingham',
                  'Scooter', 'Stopcontactdoos', 'Autobandventieldopje', 'Deurklink', 'Brandweerauto',
                  'Parkeerplaats', 'Huurcontract', 'Koopwoning', 'Programmeertalen', 'Klokwijzer' ]
    }
  },
  methods: {
    randomWord: function() {
      let randomNumber = Math.floor((Math.random() * 29) + 0)
      this.hangingmanWord = this.words[randomNumber]
      this.showGame = true
    },
    gameRules () {
      this.$store.state.gameRule = true
    }
  },
  watch: {
    checkEndGame (data) {
      this.showGame = false
      this.$store.state.endGame = false
    }
  },
  computed: {
    checkEndGame () {
      return this.$store.state.endGame
    }
  }
}
</script>

<style lang="css" scoped>
#background {
  background-image: url('../assets/background.png');
}
</style>
