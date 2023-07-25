<template>
  <ul class="border-r-2 h-[44rem] items-center pt-12">
    <router-link
      class="hover:green-800 block px-24 py-4 text-gray-500 font-semibold"
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
  methods:{
    handleCllick(){
      return true;
    }
  }
};
</script>

<style></style>
