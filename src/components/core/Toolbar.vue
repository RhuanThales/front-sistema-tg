<template>
  <v-toolbar color="grey lighten-3">
    <v-btn
      v-if="responsive"
      icon
      color="grey darken-2"
      @click.stop="onClickBtn"
    >
      <v-icon>mdi-view-list</v-icon>
    </v-btn>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <div class="flex-grow-1"/>
    <v-spacer />
    <v-btn
      icon
      class="toolbar-items"
      color="grey darken-2"
      to="/login"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  data: () => ({
    title: null,
    responsive: false,
    responsiveInput: false
  }),
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>
