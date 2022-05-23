<template>
  <div class="content">
    Item ID by Inject: {{ id }}
    <br />
    Item ID by Prop: {{ itemId }}
  </div>
</template>

<script>
export default {
  inject: { $item: { default: null } },
  props: {
    itemId: { type: [Number, String] },
  },
  computed: {
    itemByinject() {
      if (this.$item) {
        return this.$item();
      }
      return null;
    },
    id() {
      if (this.itemByinject) {
        return this.itemByinject.id;
      }
      return "";
    },
  },
};
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff3d;
}
</style>


