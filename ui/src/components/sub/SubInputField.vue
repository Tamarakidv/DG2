<template lang="html">
  <v-flex xs1>
    <v-text-field
      ref="inputField"
      v-model="givenLetter"
      label="Voer een letter in"
      :rules="inputRule"
    ></v-text-field>
    <v-btn
      color="primary"
      :disabled="!valid"
      @click="enter"
    >
      Enter
    </v-btn>
  </v-flex>
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
      inputRule: [
        v => (v && v.length <= 1) || 'Voer één letter in'
      ]
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
          this.$store.state.letter[i].fisible = true
        } else {
          if (counter == (this.$store.state.letter.length - 1)) {
            let fail = this.$store.state.failLetter.length + 1
            this.$store.state.failLetter.push(fail + ' fail(s)')
          } else {
            counter++
          }
        }
      }
      if (this.givenLetter) {
        this.$store.state.storeGivenLetter.push({'letter': this.givenLetter})
      }
      this.$refs.inputField.reset()
      this.valid = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
