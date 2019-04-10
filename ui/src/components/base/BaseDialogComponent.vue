<template lang="html">

</template>

<script>
export default {
  props: {
    hangingmanWord: String
  },
  data () {
    return {
      dialog: false
    }
  },
  watch: {
    checkFails (data) {
      if (data === 5) {
        this.$store.state.endGame = true
        setTimeout(function () {
          this.dialog = true
        }, 3000)
      }
    },
    checkWin (data) {
      this.dialog = true
    }
  },
  computed: {
    checkFails () {
      return this.$store.state.failLetter
    },
    checkWin () {
      return this.$store.state.win
    }
  }
}
</script>

<style lang="css" scoped>
</style>
