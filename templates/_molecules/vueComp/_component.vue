<template>
  <div>
    <h2>Vue Comp Example</h2>
    <input v-model="message"
           class="m-vueComp__input"
           type="text">
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      message: 'Type something…',
    };
  },
};
/* eslint-enable */
</script>
