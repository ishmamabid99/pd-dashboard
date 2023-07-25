<template>
  <AppBarComponent :options="navOptions" :logo="logo" v-if="isRoutedPage" />
  <div class="flex gap-9 md:gap-16">
    <SideBarComponent
      v-if="screenSize === 'lg'"
      class="h-96 w-fit fixed mt-44"
      :options="sideBarOptions"
    />
    <div class="w-full h-screen mt-24 md:ml-96 md:mr-20">
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
      screenSize: "lg",
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
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      const width = window.innerWidth;
      if (width >= 1024) this.screeSize = "lg";
      else if (width <= 768) this.screenSize = "sm";
      else this.screenSize = "md";
    },
  },
};
</script>
<style>
#app {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
