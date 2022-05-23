<template>
  <div class="comp_label content">Label: {{ itemProps.text }}</div>
</template>

<script>
export default {
  props: {
    itemProps: { type: Object },
  },
};
</script>

<style>
.comp_label.content {
  height: 100%;
  width: 100%;
  border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #e4026b3d;
}
</style>
