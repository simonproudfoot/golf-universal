import Vue from "vue";

Vue.mixin({
  computed: {
    isSpecial() {
      // Your computed property logic here
      return this.$route.name == 'againstallodds'
    }
  }
})