<!--
 @author David Hellmann [david@hellmann.io]

 spacer
-->
<template>
  <div :class="rootClass">
    spacer
  </div>
</template>

<script>
export default {
    name: 'Spacer',
    components: {},
    props: {
        modifiers: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            cn: 'c-spacer'
        };
    },
    computed: {
        rootClass() {
            const modifiers = this.modifiers
                .map(mod => `${this.cn}--${mod}`)
                .join('  ');
            return [this.cn, modifiers];
        }
    },
    watch: {},
    mounted() {},
    created() {},
    methods: {},
}
</script>
