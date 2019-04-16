<template lang="html">
  <v-layout justify-end>
      <v-card v-for="letter in this.letters" class="letterBlock headerText">
        <v-layout align-end justify-center row fill-height>
          <v-card-text v-if="letter.visible === true">
            {{letter.letter}}
          </v-card-text>
          <v-card-text v-else>
          </v-card-text>
        </v-layout>
      </v-card>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: {
    hangingmanWord: String
  },
  data () {
    return {
      gottenWord: '',
      randomWord: '',
      letters: [],
      cardWidth: null
    }
  },
  created () {
    this.gottenWord = this.hangingmanWord
  },
  watch: {
    gottenWord (data) {
      console.log(data);
      if (this.$store.state.storeGivenLetter.length <= 1) {
        this.letters = []
        for (let i = 0; i < data.length; i++) {
          if (data.charAt(i) == ' ') {
            this.letters.push({'letter': '-', 'visible': true})
          } else {
            this.letters.push({'letter': data.charAt(i).toUpperCase(), 'visible': false})
          }
        }
        this.$store.state.storeGivenLetter = [{'letter': null}]
      } else {
        for (var i = 0; i < data.length; i++) {
          let counter = 0
          let storage = false
          for (var x = 0; x < this.$store.state.storeGivenLetter.length; x++) {
            if (data.charAt(i).toUpperCase() == this.$store.state.storeGivenLetter[x].letter) {
              storage = true
            }
            if (counter == (this.$store.state.storeGivenLetter.length - 1)) {
              this.letters.push({'letter': data.charAt(i).toUpperCase(), 'visible': storage})
            } else {
              counter++
            }
          }
        }
      }
      this.$store.state.letter = this.letters
    },
    updateLetters (data) {
      this.letters = this.$store.state.letter
    }
  },
  computed: {
    updateLetters () {
      return this.$store.state.update
    }
  }
}
</script>
<style lang="css" scoped>


</style>
