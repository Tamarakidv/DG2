<template>
  <v-layout column>
    <v-layout justify-center>
      <img class="gameboard" :src="require('@/assets/'+ images[$store.state.failLetter])" />
    </v-layout>
    <v-layout justify-center class="gameControls">
      <v-flex xs8>
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
  </v-layout>
</template>


<script>
import inputfield from '../components/sub/SubInputField.vue'
import lettercomponent from '../components/sub/SubLetterComponent.vue'

export default {
  components: {
    inputfield,
    lettercomponent
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
    image: String
  }
}
</script>

<style lang="css" scoped>

</style>
