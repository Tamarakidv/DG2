<template lang="html">
  <v-layout>
    <h1>Galgje</h1>
    <v-btn @click="randomWoord">Start</v-btn>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      galgWoord: '',
      woorden: [  'Kippenhok', 'Computer', 'Computer muis', 'Schommelbank', 'Grassprietje',
                  'Alpaca', 'Vliegvakantie', 'Vakantie', 'Website', 'Hondenbakje',
                  'Kreeft', 'Horoscoop', 'Televisie', 'Playstation', 'Gamer',
                  'Winkelwagen', 'Hamburger', 'Tuinbroek', 'Appelsap', 'Birmingham',
                  'Scooter', 'Stopcontactdoos', 'Autobandventieldopje', 'Deurklink', 'Brandweerauto',
                  'Pakeerplaats', 'Huurcontract', 'Koopwoning', 'Programmeertalen', 'Klokwijzer' ]
    }
  },
  methods: {
    randomWoord: function() {
      let randomGetal = Math.floor((Math.random() * 29) + 0)
      this.galgWoord = this.woorden[randomGetal]
      console.log(this.galgWoord)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
