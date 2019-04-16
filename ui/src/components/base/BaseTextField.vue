<template lang="html">
  <v-layout row wrap>
    <v-flex xs3>
      <v-text-field
        v-model="word"
        @keyup.13="enterKey"
      ></v-text-field>
    </v-flex>
    <v-btn color="primary" @click="enter">Enter</v-btn>
  </v-layout>
</template>

<script>
export default {
  props: {
    hangingmanWord: String
  },
  data () {
    return {
      word: ''
    }
  },
  methods: {
    enterKey () {
      this.enter()
    },
    enter () {
      let theWord = this.hangingmanWord.toLowerCase()
      if (theWord == this.word) {
        // true
        this.$store.state.win = true
      } else {
        // false
        this.$store.state.failLetter++
        this.$store.state.guesWord = true
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
