<template>
  <app-bar-component
    @showSidebar="toggleSidebar"
    :options="navOptions"
    :logo="logo"
    v-if="isRoutedPage"
  />
  <div class="flex gap-9 md:gap-16">
    <side-bar-component
      @closeSidebar="toggleSidebar"
      :class="sidebar ? 'block' : 'hidden'"
      class="h-96 w-fit fixed z-50 lg:block lg:mt-44"
      :options="sideBarOptions"
      v-if="isRoutedPage"
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
      sidebar: false,
      logo: logo,
      navOptions: ["Login"],
      sideBarOptions: [
        "Dashboard",
        "Blogs",
        "Tasks",
        "Issues",
        "Learnings",
        "Post",
        "Profile",
      ],
    };
  },
  components: { AppBarComponent, SideBarComponent },
  computed: {
    isRoutedPage() {
      return this.$route.name === "error-page" ? false : true;
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
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
