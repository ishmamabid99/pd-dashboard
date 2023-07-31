<template>
  <ul
    class="lg:block border-r-2 h-full lg:h-[44rem] items-start md:items-center pt-44 lg:pt-16 px-24 bg-white"
  >
    <div @click="handleClick" class="lg:hidden fixed top-2 left-0 p-8">
      <img class="shadow-lg rounded-full" :src="icon" />
    </div>
    <router-link
      class="hover:text-green-700 block py-4 sm:text-xl font-semibold opacity-70"
      v-for="(item, index) in options"
      :key="index"
      :to="{ name: item.toLowerCase() }"
    >
      {{ item.toUpperCase() }}
    </router-link>
  </ul>
</template>

<script>
import backIcon from "../assets/back-icon.png";
export default {
  data() {
    return {
      icon: backIcon,
    };
  },
  props: ["options"],
  methods: {
    handleClick() {
      this.$emit("closeSidebar");
    },
  },
};
</script>

<style>
.router-link-exact-active {
  @apply text-green-700;
}
</style>
