<template>
  <v-layout column>
    <v-layout>
      <v-flex offset-xs2 xs8>
        <img class="gameboard" :src="require('@/assets/'+ images[$store.state.failLetter])" />
      </v-flex>
      <v-flex xs3>
        <guessedLetterComponent
          :guessedText="guessedText"
          class="textSize"/>
      </v-flex>
    </v-layout>
    <v-layout v-if="guesWord" justify-center class="gameControls">
      <v-flex offset-xs2>
        <lettercomponent
          :hangingmanWord="hangingmanWord"
        ></lettercomponent>
      </v-flex>
        <inputfield
        class="gameInput"
          :hangingmanWord="hangingmanWord"
        ></inputfield>
        <v-btn color="primary" @click="guesTheWord">Raad woord</v-btn>
    </v-layout>
    <v-layout v-if="!guesWord" class="gameControls">
      <v-flex offset-xs2>
        <textField :hangingmanWord="hangingmanWord"/>
      </v-flex>
    </v-layout>
    <dialogComp :hangingmanWord="hangingmanWord"/>
  </v-layout>
</template>


<script>
import inputfield from '../components/sub/SubInputField.vue'
import lettercomponent from '../components/sub/SubLetterComponent.vue'
import guessedLetterComponent from '../components/sub/SubGuessedLetterComponent.vue'
import dialogComp from '../components/base/BaseDialogComponent.vue'
import textField from '../components/base/BaseTextField.vue'

export default {
  components: {
    inputfield,
    lettercomponent,
    guessedLetterComponent,
    dialogComp,
    textField
  },
  data () {
    return {
      images: [
        'start.png',
        'Galg1.png',
        'Galg2.png',
        'Galg3.png',
        'Galg4.png',
        'Galg5.png'
      ],
      guesWord: true
    }
  },
  props: {
    hangingmanWord: String,
    image: String,
    guessedText: String
  },
  methods: {
    guesTheWord () {
      this.guesWord = false
    }
  },
  watch: {
    checkGuesWord (data) {
      this.$store.state.guesWord = false
      this.guesWord = true
      console.log(this.guesWord);
    }
  },
  computed: {
    checkGuesWord () {
      return this.$store.state.guesWord
    }
  }
}
</script>

<style lang="css" scoped>

</style>
