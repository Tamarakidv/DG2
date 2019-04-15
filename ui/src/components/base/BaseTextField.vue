<template lang="html">
  <v-layout row wrap>
    <v-flex xs3>
      <v-text-field
        v-model="word"
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
    enter () {
      let theWord = this.hangingmanWord.toLowerCase()
      if (theWord == this.word) {
        // true
        this.$store.state.win = true
      } else {
        // false
        this.$store.state.guesWord = false
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
