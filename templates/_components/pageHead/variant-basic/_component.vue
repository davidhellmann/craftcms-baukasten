<!--
 @author David Hellmann [david@hellmann.io]

 sampleBasic
-->
<template>
  <div :class="rootClass">
    sampleBasic
  </div>
</template>

<script>
export default {
  name: 'SampleBasic',
  components: {},
  props: {
    modifiers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cn: 'a-sample',
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
