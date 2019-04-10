<template lang="html">
  <v-layout>
    <img :src="require('@/assets/'+ guessedText)">
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    guessedText: String
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>


</style>
