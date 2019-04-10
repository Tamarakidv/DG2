<template lang="html">
  <v-layout>
    <v-flex xs5>
      <v-layout fill-height>
        <h2>Voer hier uw letter in:</h2>
      </v-layout>
    </v-flex>
    <v-flex xs1>
      <v-text-field
        ref="inputField"
        v-model="givenLetter"
        single-line
        mask="A"
        @keyup.13="enter"
      ></v-text-field>
    </v-flex>
    <v-flex xs1>
      <v-btn
        color="primary"
        :disabled="!valid"
        @click="enter"
      >Enter</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    hangingmanWord: String
  },
  data () {
    return {
      givenLetter: '',
      valid: false,
    }
  },
  watch: {
    givenLetter (thisLetter) {
      let counter = 0
      for (let i = 0; i < this.$store.state.storeGivenLetter.length; i++) {
        if (this.$store.state.storeGivenLetter[i].letter != thisLetter) {
          if (counter == (this.$store.state.storeGivenLetter.length - 1)) {
            if (!thisLetter || thisLetter.length <= 0 || thisLetter.length > 1) {
              this.valid = false
            } else {
              this.valid = true
            }
          } else {
            counter++
          }
        }
      }
    }
  },
  methods: {
    enter () {
      let counter = 0
      for (var i = 0; i < this.$store.state.letter.length; i++) {
        if (this.$store.state.letter[i].letter == this.givenLetter || this.$store.state.letter[i].letter == this.givenLetter.toUpperCase()) {
          this.$store.state.letter[i].visible = true
        } else {
          if (counter == (this.$store.state.letter.length - 1)) {
            this.$store.state.failLetter++
          } else {
            counter++
          }
        }
      }
      if (this.givenLetter) {
        this.$store.state.storeGivenLetter.push({'letter': this.givenLetter})
      }
      let count = this.$store.state.update++
      this.$store.state.update = count
      this.$refs.inputField.reset()
      this.valid = false
      let counting = 0
      for (var i = 0; i < this.$store.state.letter.length; i++) {
        if (this.$store.state.letter[i].visible === true) {
          if (counting  == (this.$store.state.letter.length - 1)){
            this.$store.state.win = true
          } else {
            counting++
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
