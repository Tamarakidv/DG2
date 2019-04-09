<template lang="html">
  <v-layout justify-center>
      <v-card v-for="letter in letters" height="50px" width="50px">
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
      randomWord: '',
      letters: [],
      cardWidth: null
    }
  },
  watch: {
    hangingmanWord (data) {
      this.letters = []
      for (let i = 0; i < data.length; i++) {
        this.letters.push({'letter': data.charAt(i), 'visible': false})
      }
      this.$store.state.letter = this.letters
      this.$store.state.storeGivenLetter = [{'letter': null}]
    }
  }
}
</script>
<style lang="css" scoped>
</style>
