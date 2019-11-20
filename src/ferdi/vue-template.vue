<!--
 @author <%= author.name %> [<%= author.email %>]

 <%= moduleName.replace('-', '_') %>Basic
-->
<template>
  <div :class="rootClass">
    <%= moduleName %>Basic
  </div>
</template>

<script>
export default {
    name: '<%= moduleName.replace('-', '_').charAt(0).toUpperCase() %><%= moduleName.replace('-', '_').slice(1) %>Basic',
    components: {},
    props: {
        modifiers: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            cn: '<%= pathOptions.key.charAt(0) %>-<%= moduleName.replace('-', '_') %>'
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
