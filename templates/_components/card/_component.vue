<!--
 Description of what this file is for

 @package Baukasten
 @author David Hellmann [david@hellmann.io]
 card
-->
<template>
  <article :class="`${rootClass}  ${cn}--vue`">
    <div :class="`${cn}__wrapper`">
      <div :class="`${cn}__inner`">
        <a :class="[`${cn}__link`]" :href="item.url">
          <picture v-if="item.entryImage.src"
                   :style="`background-color: ${item.entryImage.dominantColor};`"
                   class="a-image">
            <img :src="item.entryImage.placeholder"
                 :data-srcset="item.entryImage.srcset"
                 :alt="item.title"
                 class="a-image__image  lazyload"
                 data-sizes="100vw"
                 height="auto">
            <noscript><img :src="item.entryImage.src" :alt="item.title"></noscript>
          </picture>

          <h2 class="a-headline  a-headline--h6">{{ item.title }}</h2>
          <div class="a-richText" v-html="item.entrySummary"/>

          <span class="m-card__readmore">Read more</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cn: 'm-card',
    };
  },
  computed: {
    rootClass() {
      const modifiers = this.modifiers.map(mod => `${this.cn}--${mod}`)
        .join('  ');
      return [this.cn, modifiers];
    },
  },
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {},
};
</script>
