<script>
import { h } from 'vue';
export default {
  name: 'RawIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render() {
    if (!this.icon.length) {
      return false;
    }
    return h({ template: this.icon });
  },
};
</script>
