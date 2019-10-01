<template>
  <v-app>
    <core-toolbar v-if="$route.path!=='/login' && $route.path!=='/404'"/>
    <core-drawer v-if="$route.path!=='/login' && $route.path!=='/404'"/>
    <core-view />
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  watch: {
    $route (to, from) {
      this.clearAlert()
    }
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

html {
  background: #EEEEEE;
}
.v-toolbar {
  contain: layout;
  flex: 0;
  max-width: 100%;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}
.v-card .v-offset .v-card--material__header.v-card{
  color: white !important;
}
.v-navigation-drawer .v-list .v-divider {
  border-color: rgba(180, 180, 180, 0.3);
  margin: -1px auto 0px;
  width: calc(100% - 30px);
}
.v-btn--floating, .v-btn--icon:before{
  border-radius: 50% !important;
}
.v-list-item {
  margin: 5px 15px 5px !important;
}
.v-list__group__header {
  margin-left: 20px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.caixaLogin {
  margin-top: 100px;
  font-size: 16px;
}
</style>
