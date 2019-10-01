<template>
  <v-alert
    v-bind="$attrs"
    :class="[`elevation-${elevation}`]"
    :value="value"
    class="v-alert--notification"
    v-on="$listeners"
  >
    <slot />
  </v-alert>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    elevation: {
      type: [Number, String],
      default: 6
    },
    value: {
      type: Boolean,
      default: true
    }
  }
}
</script>
