<template lang="html">
  <v-layout justify-center>
      <v-card v-for="letter in letters" height="50px" width="50px">
        <v-layout align-end justify-center row fill-height>
          <v-card-text>
            {{letter.letter}}
          </v-card-text>
        </v-layout>
      </v-card>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      randomWord: 'dit woord',
      letters: [],
      cardWidth: null
    }
  },
  methods: {
    wordToArray () {
      for (let i = 0; i < this.randomWord.length; i++) {
        this.letters.push({'letter': this.randomWord.charAt(i), 'fisible': true})
      }
    }
  },
  created () {
    this.wordToArray()
  }
}
</script>
<style lang="css" scoped>
</style>
