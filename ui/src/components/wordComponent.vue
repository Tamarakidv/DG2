<template>
  <v-layout column>
    <v-layout>
      <v-flex offset-xs3>
        <img class="gameboard" :src="require('@/assets/'+ images[$store.state.failLetter])" />
      </v-flex>
      <v-flex>
        <guessedLetterComponent
          :guessedText="guessedText"
          class="textSize"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="gameControls">
      <v-flex offset-xs3>
        <lettercomponent
          :hangingmanWord="hangingmanWord"
        ></lettercomponent>
      </v-flex>
      <v-flex xs6>
        <inputfield
        class="gameInput"
          :hangingmanWord="hangingmanWord"
        ></inputfield>
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

export default {
  components: {
    inputfield,
    lettercomponent,
    guessedLetterComponent,
    dialogComp
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
    }
  },
  props: {
    hangingmanWord: String,
    image: String,
    guessedText: String
  }
}
</script>

<style lang="css" scoped>

</style>
