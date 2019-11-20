<!--
 @author <%= author.name %> [<%= author.email %>]

 <%= moduleName.replace('-', '_') %>
-->
<template>
  <div :class="rootClass">
    <%= moduleName %>
  </div>
</template>

<script>
export default {
    name: '<%= moduleName.replace('-', '_').charAt(0).toUpperCase() %><%= moduleName.replace('-', '_').slice(1) %>',
    components: {},
    props: {
        modifiers: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            cn: 'c-<%= moduleName.replace('-', '_') %>'
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
