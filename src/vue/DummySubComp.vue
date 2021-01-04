<template>
  <h1 class="text-2xl font-bold">Vue Dummy(Sub)Component</h1>
  <input v-model="message" placeholder="Type here..." class="border-2 border-black px-2 py-1" />
  <p>Message is: {{ message }}</p>
</template>

<script lang="ts">
// Async load the Vue 3 APIs we need from the Vue ESM
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    const message = ref('')
    return {
      message
    }
  },
  mounted() {},
  methods: {},
});
</script>
