<!--
 Description of what this file is for

 @package  <%= projectName %>
<% for (var i=0; i < authors.length; i++) { -%>
 @author <%= authors[i].name %> [<%= authors[i].email %>]
<% } -%>
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
