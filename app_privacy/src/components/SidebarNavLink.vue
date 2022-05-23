<template>
  <a
    :href="link"
    class="flex justify-between items-center px-4 py-2"
    :class="{
      'bg-gray-800 text-white': active,
      'text-gray-500 hover:text-white': !active,
    }"
  >
    <span>
      {{ title }}
    </span>
    <span
      v-if="count"
      class="
        bg-indigo-600
        rounded-full
        px-2
        py-2
        leading-none
        text-xs text-white
      "
    >
      {{ count }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    link: { type: String, default: "#" },
    count: { type: Number, default: null },
    active: { type: Boolean, default: false },
  },
};
</script>

<style>
</style>