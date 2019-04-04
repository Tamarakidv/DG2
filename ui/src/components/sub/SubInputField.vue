<template lang="html">
  <v-flex xs1>
    <v-text-field
      ref="inputField"
      v-model="givenLetter"
      label="kies een letter"
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
        v => (v && v.length <= 1) || 'je mag maar 1 letter infoeren'
      ]
    }
  },
  watch: {
    givenLetter (thisLetter) {
      let counter = 0
      for (let i = 0; i < this.$store.state.storeGivenLetter.length; i++) {
        console.log(this.$store.state.storeGivenLetter[i].letter, '||', thisLetter);
        if (!this.$store.state.storeGivenLetter[i].letter == thisLetter) {
          console.log('i');
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
    // storeLetter () {
    //   console.log(this.$store.state.storeGivenLetter);
    // },
    enter () {
      let counter = 0
      for (var i = 0; i < this.$store.state.letter.length; i++) {
        if (this.$store.state.letter[i].letter == this.givenLetter) {
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
        this.$store.state.storeGivenLetter.push(this.givenLetter)
        console.log('data: ', this.$store.state.storeGivenLetter);
      }
      this.$refs.inputField.reset()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
