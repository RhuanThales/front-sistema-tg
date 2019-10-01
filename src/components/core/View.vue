<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Tiro de Guerra 04-013'
    }
  }
}
</script>
