<template>
  <h1 class="text-2xl font-bold">Vue Sample Sub</h1>
  <input v-model="message" placeholder="Type here..." class="border-2 border-black px-2 py-1" />
  <p>Message is: {{ message }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('');
</script>
