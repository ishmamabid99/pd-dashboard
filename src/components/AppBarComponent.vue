<template>
  <nav
    class="bg-white items-center justify-between shrink-0 fixed w-screen shadow-md flex px-6 sm:px-10 py-2"
  >
    <button
      @click="handleSideBar"
      class="block lg:hidden text-green-800 bg-white p-0 left-0"
    >
      <svg
        class="w-8 sm:w-10 h-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
    <div>
      <img class="h-12 md:h-20 w-auto" :src="logo" />
    </div>
    <div class="flex items-center">
      <button
        v-for="(item, index) in options"
        :key="index"
        class="text-green-700 text-base md:text-2xl mx-4 font-semibold opacity-80"
      >
        {{ item }}
      </button>
    </div>
  </nav>
  <div>
    {{ error }}
    {{ data }}
    {{ loading }}
  </div>
</template>

<script>
import { useRequest } from "alova";
import { getData } from "@/api/methods/auth";
export default {
  data() {
    return {
      data: ["1"],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    this.getReq();
  },
  props: ["logo", "options"],
  methods: {
    handleSideBar() {
      this.$emit("showSidebar");
    },
    getReq() {
      try {
        this.data = useRequest(getData);
      } catch (err) {
        this.error = err;
      }
      console.log(this.data);
    },
    demoJwt() {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwiaXNobWFtXzEwMVwiLFwiaWRcIjo0fSIsImlhdCI6MTY5Mjg2NjU4OSwiZXhwIjoxNjkyODY3MTg5fQ.XW-6TfifuTFTNGvyZ0E9pUL_j7GhImjR2BuemXTDyG4";
      const [, payload] = token.split(".");
      const decodedToken = JSON.parse(atob(payload));
      const decodedUserData = JSON.parse(decodedToken.sub);
      return { decodedToken, decodedUserData };
    },
  },
};
</script>

<style></style>
