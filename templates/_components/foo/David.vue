<!--

-->
<template>
  <div :class="rootClass">
    fooDavid
  </div>
</template>

<script>
export default {
  name: 'FooDavid',
  components: {},
  props: {
    modifiers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cn: 'c-fooDavid',
    };
  },
  computed: {
    rootClass() {
      const modifiers = this.modifiers
        .map(mod => `${this.cn}--${mod}`)
        .join('  ');
      return [this.cn, modifiers];
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
};
</script>
