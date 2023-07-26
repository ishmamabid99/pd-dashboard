<template>
  <ul class="border-r-2 h-[44rem] items-center pt-16 px-24">
    <router-link
      class="hover:text-green-700 block py-4 font-semibold opacity-70"
      v-for="(item, index) in options"
      :key="index"
      :to="{ name: item.toLowerCase() }"
    >
      {{ item.toUpperCase() }}
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["options"],
  methods: {
    handleCllick() {
      return true;
    },
  },
};
</script>

<style>
.router-link-exact-active {
  @apply text-green-700 
}
</style>
