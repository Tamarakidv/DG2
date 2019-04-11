<template lang="html">
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <v-card>
      <v-layout row wrap justify-center>
        <v-card-title primary-title class="headline">
          Regels
        </v-card-title>
      </v-layout>
      <v-card-text>
        1. regel 1
        <br/>
        2. regel 2
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  watch: {
    checkGameRule (data) {
      this.dialog = true
      this.$store.state.gameRule = false
    }
  },
  computed: {
    checkGameRule () {
      return this.$store.state.gameRule
    }
  }
}
</script>

<style lang="css" scoped>
</style>
