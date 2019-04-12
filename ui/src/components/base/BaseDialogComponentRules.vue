<template lang="html">
  <v-dialog
    v-model="dialog"
    max-width="500px"
    persistent
  >
    <v-card>
      <v-layout row wrap justify-center>
        <v-card-title primary-title class="headline">
          <h3 class="headerText">Regels</h3>
        </v-card-title>
      </v-layout>
      <v-card-text>
        <p>Het spel genereert een woord. Je mag per beurt 1 letter invullen dat je denkt dat in het woord zit.
        Zit de letter niet in het woord, krijg je een stukje galg erbij. </p>
        <p>Je mag in totaal 5 keer fout raden.
        Heb je 5 keer fout geraden, dan heb je verloren. Heb je het binnen 5 keer geraden, dan heb je gewonnen!</p>
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn color="primary" @click="closeDialog">Close</v-btn>
        </v-layout>
      </v-card-actions>
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
  methods: {
    closeBtn () {
      this.dialog = false
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
  },
  methods: {
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
