<template>
  <app-bar-component :options="navOptions" :logo="logo" v-if="isRoutedPage" />
  <div class="flex gap-9 md:gap-16">
    <side-bar-component
      class="h-96 w-fit hidden fixed lg:block mt-44"
      :options="sideBarOptions"
    />
    <div class="w-full mt-32 lg:ml-96 lg:mr-20">
      <router-view />
    </div>
  </div>
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
      sideBarOptions: ["Tasks", "Issues", "Learnings", "Post", "Profile"],
    };
  },
  components: { AppBarComponent, SideBarComponent },
  computed: {
    isRoutedPage() {
      return this.$route.name === "error-page" ? false : true;
    },
  },
};
</script>
<style>
#app {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 0; /* Adjust the width as needed */
}
</style>
