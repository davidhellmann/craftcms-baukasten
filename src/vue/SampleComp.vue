<template>
  <SampleSubComp />
</template>

<script lang="ts">
// Async load the Vue 3 APIs we need from the Vue ESM
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    SampleSubComp: defineAsyncComponent(
      () => import(/* webpackChunkName: "sampleSubComp" */ '@/vue/SampleSubComp.vue'),
    ),
  },
  mounted() {},
  methods: {},
});
</script>
