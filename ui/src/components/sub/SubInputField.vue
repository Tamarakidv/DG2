<template lang="html">
  <v-flex xs1>
    <v-text-field
      name="name"
      label="kies een letter"
      :rules="inputRule"
    ></v-text-field>
    <v-btn
      color="primary"
      :disabled="!valid"
      @click="validate"
    >
      Enter
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      inputRule: [
        v => (v && v.length <= 1) || 'je mag maar 1 letter per keer infullen'
      ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
  created () {
    console.log();
  }
}
</script>

<style lang="css" scoped>
</style>
