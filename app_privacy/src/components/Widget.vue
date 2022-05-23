<template>
  <div class="grid-stack-item" v-bind="gridStackAttributes">
    <div class="grid-stack-item-content">{{ widget.text }}</div>
  </div>
</template>
<script>
import get from "lodash/fp/get";
export default {
  props: {
    widget: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    gridStackAttributes() {
      return {
        id: get(this.widget, "id", "widget"),
        "data-gs-id": get(this.widget, "id", "widget"),
        "data-gs-x": get(this.widget, "layout.x", 0),
        "data-gs-y": get(this.widget, "layout.y", 0),
        "data-gs-width": get(this.widget, "layout.width", 2),
        "data-gs-height": get(this.widget, "layout.height", 1),
      };
    },
  },
};
</script>
<style>
.grid-stack-item {
  margin: 10px;
}
.grid-stack-item-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3182ce;
  background-color: #bee3f8;
  font-weight: 600;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>

