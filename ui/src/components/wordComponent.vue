<template>
  <v-layout column>
    <v-container justify-center >
      <img class="gameboard" :src="require('@/assets/'+ images[5])" />
    </v-container>
    <v-container>
      <v-layout row>
        <lettercomponent
          :hangingmanWord="hangingmanWord"
        ></lettercomponent>
        <inputfield
          :hangingmanWord="hangingmanWord"
        ></inputfield>
      </v-layout>
    </v-container>
    <v-layout justify-center>
      <h1>{{ hangingmanWord }}</h1>
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
      showImg: ''
    }
  },
  props: {
    hangingmanWord: String,
    image: String
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.gameboard {
  border: double 5px;
  border-color: grey;
  border-radius: 5px;
}
</style>
