<template lang="html">
  <v-layout column>
    <v-layout row wrap>
      <img :src="require('@/assets/'+ guessedText)">
    </v-layout>
      <v-layout row wrap>
        <v-flex v-for="letter in letters" xs2>
          <v-card-text >
            {{letter}}
          </v-card-text>
        </v-flex>
      </v-layout>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      letters: [],
      counter: 0
    }
  },
  props: {
    guessedText: String
  },
  watch: {
    checkLetters (data) {
      let count = 0
      for (var i = 0; i < data.length; i++) {
        if (data[i].letter != null) {
          if (count == (data.length - 1)) {
            this.letters.push(data[i].letter)
          }else {
            count++
          }
        } else {
          count++
        }
      }
    }
  },
  computed: {
    checkLetters () {
      return this.$store.state.storeGivenLetter
    }
  }
}
</script>

<style lang="css" scoped>


</style>
