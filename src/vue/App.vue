<template>
  <confetti />
</template>

<script lang="ts">
// Async load the Vue 3 APIs we need from the Vue ESM
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    confetti: defineAsyncComponent(
      () => import(/* webpackChunkName: "confetti" */ './Confetti.vue'),
    ),
  },
  data: () => ({}),
  mounted() {},
  methods: {},
});
</script>
