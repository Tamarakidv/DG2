<template>
  <v-layout column>
    <v-layout justify-center>
      <img v-bind:src="image">
      <h1>{{ img }}</h1>
    </v-layout>
    <v-layout justify-center>
      <h1>{{ hangingmanWord }}</h1>
    </v-layout>
  </v-layout>
</template>


<script>

export default {
  data () {
    return {
    }
  },
  props: {
    hangingmanWord: String,
    image: String
  }
}
</script>
