<template lang="html">
  <v-layout justify-center>
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
      console.log(data)
      this.letters = []
      for (let i = 0; i < data.length; i++) {
        if (data.charAt(i) == ' ') {
          this.letters.push({'letter': data.charAt(i), 'visible': true})
        } else {
          this.letters.push({'letter': data.charAt(i), 'visible': false})
        }
      }
      this.$store.state.letter = this.letters
      this.$store.state.storeGivenLetter = [{'letter': null}]
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
.letterBlock {
  width: 50px;
  height: 50px;
  border: solid 1px;
  border-color: grey;
}

</style>
