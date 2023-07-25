<template>
  <AppBarComponent :options="navOptions" :logo="logo" v-if="isRoutedPage" />
  <div class="flex h-screen mt-10">
    <SideBarComponent :options="sideBarOptions" />
    <!-- Main Content -->
    <div class="flex-1">
      <router-view />
    </div>
  </div>
  <router-view />
</template>
<script>
import AppBarComponent from "./components/AppBarComponent.vue";
import SideBarComponent from "./components/SideBarComponent.vue";
import logo from "./assets/logo.png";
export default {
  data() {
    return {
      logo: logo,
      navOptions: ["Login"],
      sideBarOptions: ["Issues", "Tasks", "Learnings", "Post", "Profile"],
    };
  },
  components: { AppBarComponent, SideBarComponent },
  computed: {
    isRoutedPage() {
      console.log(this.$route.name);
      return this.$route.name === "error-page" ? false : true;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
