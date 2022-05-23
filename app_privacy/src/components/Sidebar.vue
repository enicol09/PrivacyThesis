<template>
  <div class="w-64 bg-gray-900 text-gray-500 flex flex-col max-h-screen">
    <div class="px-4 py-3">
      <h1 class="font-bold text-indigo-500">In.DI</h1>
    </div>
    <div class="px-4 py-3">
      <a href="" class="flex items-center space-x-4 hover:text-white">
        <span
          class="
            w-6
            h-6
            bg-gray-500
            rounded-lg
            flex
            justify-center
            items-center
            text-xs text-gray-900
          "
          >M</span
        >
        <span>My app name</span>
      </a>
    </div>
    <SidebarLabel title="Navigation" />
    <div class="flex-1 overflow-hidden">
      <div class="h-full overflow-x-hidden overflow-y-scroll">
        <nav class="">
          <SidebarNavLink title="Dashboard" link="#" />
          <SidebarNavLink title="Courses" link="#" :count="12" :active="1" />
          <SidebarNavLink title="Overview" link="#" />
          <SidebarNavLink title="Teams" link="#" />
          <SidebarNavLink title="Setting" link="#" />
        </nav>
      </div>
    </div>
    <div class="px-4 py-4 border-t border-gray-800">
      <a href="" class="flex items-center space-x-4 text-sm hover:text-white">
        <span
          class="
            w-8
            h-8
            bg-red-400
            rounded-lg
            flex
            justify-center
            items-center
            text-xs text-white
          "
          >LM</span
        >
        <span>Luca Malattia</span>
      </a>
    </div>
  </div>
</template>

<script>
import SidebarLabel from "@/components/SidebarLabel";
import SidebarNavLink from "@/components/SidebarNavLink";

export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
  components: {
    SidebarLabel,
    SidebarNavLink,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
