<template>
  <div class="h-80 w-auto items-center justify-center flex">
    <img class="w-[640px] mt-32 px-12 hidden lg:block" :src="background" />
    <form v-if="formView" class="flex-row w-72 sm:w-96 mt-16 sm:mt-32">
      <input
        @input="username"
        type="text"
        class="w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 bg-gray-100 border-green-700 outline-0 border-2 rounded-lg"
        placeholder="username"
      />
      <input
        @input="password"
        type="password"
        class="w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 bg-gray-100 border-green-700 outline-0 border-2 rounded-lg"
        placeholder="password"
      />
      <button
        type="submit"
        class="bg-green-700 text-white w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 rounded-lg"
      >
        GO
      </button>
      <button @click="handleFormView" class="text-green-700 m-2 px-1">
        Don't have an account? Sign up instead
      </button>
    </form>
    <form v-else class="flex-row w-72 md:w-96 mt-16 sm:mt-32">
      <input
        @input="email"
        type="text"
        class="w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 bg-gray-100 border-green-700 outline-0 border-2 rounded-lg"
        placeholder="email"
      />
      <input
        @input="username"
        type="text"
        class="w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 bg-gray-100 border-green-700 outline-0 border-2 rounded-lg"
        placeholder="username"
      />
      <input
        @input="password"
        type="password"
        class="w-full py-2 px-1 m-1 sm:py-4 sm:px-2 sm:m-2 bg-gray-100 border-green-700 outline-0 border-2 rounded-lg"
        placeholder="password"
      />
      <button
        type="submit"
        class="bg-green-700 text-white w-full px-2 py-4 m-2 rounded-lg"
      >
        GO
      </button>
      <button @click="handleFormView" class="text-green-700 m-2 px-1">
        Already have an account? Sign in
      </button>
    </form>
  </div>
</template>

<script>
import { userRegistration, userSignin } from "@/api/methods/auth";
import backgroundImage from "../assets/background.svg";
export default {
  data() {
    return {
      background: backgroundImage,
      formView: true,
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    handleFormView() {
      this.formView = !this.formView;
    },
    handleSignin() {
      let requestData = {
        username: this.username,
        password: this.password,
      };
      const res = userSignin(requestData);
      if (res) {
        console.log(true);
      }
    },
    handleSignUp() {
      let requestData = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      const res = userRegistration(requestData);
      if (res) {
        console.log(true);
      }
    },
  },
};
</script>

<style></style>
