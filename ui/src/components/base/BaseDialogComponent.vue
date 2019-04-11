<template lang="html">
  <v-dialog
    v-model="dialog"
    width="500"
    persistent
  >
    <v-card v-if="wonOrNot === 'fail'">
      <v-layout row wrap justify-center>
        <v-card-title primary-title class="headline">
          Je heb verloren
        </v-card-title>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-img :src="require('@/assets/Galg5.png')" />
      </v-layout>
      <v-layout row wrap justify-center>
        <v-card-text>
          het goede woord hat moeten zijn: {{ hangingmanWord }}
        </v-card-text>
      </v-layout>
      <v-card-actions>
        <v-layout row wrap justify-center>
          <v-btn color="primary" @click="restart">restart</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>

    <v-card v-else-if="wonOrNot === 'won'">
      <v-layout row wrap justify-center>
        <v-card-title primary-title class="headline">
          You won!
        </v-card-title>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-img :src="require('@/assets/winner.jpg')" />
      </v-layout>

      <v-card-actions>
        <v-layout row wrap justify-center>
          <v-btn color="primary" @click="restart">restart</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    hangingmanWord: String
  },
  data () {
    return {
      dialog: false,
      wonOrNot: ''
    }
  },
  watch: {
    checkFails (data) {
      if (data === 5) {
          this.dialog = true
          this.wonOrNot = 'fail'
      }
    },
    checkWin (data) {
        this.dialog = true
        this.wonOrNot = 'won'
    }
  },
  computed: {
    checkFails () {
      return this.$store.state.failLetter
    },
    checkWin () {
      return this.$store.state.win
    }
  },
  methods: {
    restart () {
      this.$store.state.storeGivenLetter = [null]
      this.$store.state.letter = [null]
      this.$store.state.failLetter = 0
      this.$store.state.update = 0
      this.$store.state.endGame = false
      this.$store.state.win = false
      this.$store.state.endGame = true
      this.dialog = false
      this.wonOrNot = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
