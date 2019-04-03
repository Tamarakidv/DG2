<template lang="html">
  <v-layout>
    <h1>{{ gameName }}</h1>
    <v-btn @click="randomWord">Start</v-btn>
  </v-layout>
</template>

<script>
export default {
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
