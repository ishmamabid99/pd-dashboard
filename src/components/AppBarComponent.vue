<template>
  <nav
    class="bg-white items-center justify-between shrink-0 fixed w-screen shadow-md flex px-10 py-2"
  >
    <div>
      <img class="h-20 w-auto" :src="logo" />
    </div>
    <div class="flex items-center">
      <button
        v-for="(item, index) in options"
        :key="index"
        class="text-green-700 text-base md:text-2xl mx-4"
      >
        {{ item }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {},
  props: ["logo", "options"],
};
</script>

<style></style>
