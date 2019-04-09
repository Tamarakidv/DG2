<template>
  <v-layout column>
    <v-layout justify-center>
      <!-- <img v-bind:src="image">
      <h1>{{ img }}</h1> -->
    </v-layout>
    <v-layout xs1>
      <inputfield
        :hangingmanWord="test"
      ></inputfield>
    </v-layout>
    <lettercomponent
      :hangingmanWord="test"
    ></lettercomponent>
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
      test: 'woorrrrrrd'
    }
  },
  props: {
    hangingmanWord: String,
    image: String
  }
}
</script>
