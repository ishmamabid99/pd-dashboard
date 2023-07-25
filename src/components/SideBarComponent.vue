<template>
  <ul class="mt-32 fixed">
    <router-link class="block px-24" v-for="(item, index) in options" :key="index" :to="{name:item.toLowerCase()}">
      {{ item.toUpperCase() }}
    </router-link>
  </ul>
  <span class="py-6 border-l-2"></span>
</template>

<script>
export default {
  props: ["options"],
};
</script>

<style></style>
