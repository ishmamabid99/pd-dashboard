<template>
  <nav class="bg-white mb-10 shadow-md flex fixed w-screen top-0 shrink-0 justify-between px-10 py-2">
    <div>
      <img class="h-20 w-auto" :src="logo" />
    </div>
    <div class="flex items-center">
      <button
        v-for="(item, index) in options"
        :key="index"
        class="text-green-700 font- text-2xl mx-4"
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
