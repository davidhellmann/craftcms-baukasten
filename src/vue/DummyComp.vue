<template>
  <SubComp />
</template>

<script lang="ts">
// Async load the Vue 3 APIs we need from the Vue ESM
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    SubComp: defineAsyncComponent(
      () => import(/* webpackChunkName: "subComp" */ '@/vue/DummySubComp.vue'),
    ),
  },
  mounted() {},
  methods: {},
});
</script>
