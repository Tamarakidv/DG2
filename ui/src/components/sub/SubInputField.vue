<template lang="html">
  <v-flex xs1>
    <v-text-field
      v-model="letter"
      label="kies een letter"
      :rules="inputRule"
    ></v-text-field>
    <v-btn
      color="primary"
      :disabled="!valid"
      @click="enter"
    >
      Enter
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      letter: '',
      valid: false,
      inputRule: [
        v => (v && v.length <= 1)
      ]
    }
  },
  watch: {
    letter (thisLetter) {
      console.log(thisLetter);
      if (!thisLetter || thisLetter.length <= 0 || thisLetter.length > 1) {
        this.valid = false
      } else {
        this.valid = true
      }
    }
  },
  methods: {
    enter () {
      // function om te checken of de letter in het woord klopt
    }
  }
}
</script>

<style lang="css" scoped>
</style>
