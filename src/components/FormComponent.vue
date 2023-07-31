<template>
  <form
    @submit.prevent
    class="h-auto bg-gray-50 shadow-md mt-8 px-2 sm:px-6 md:px-40 mx-4 py-12"
  >
    <label for="title" class="text-green-700 text-base sm:text-xl font-semibold"
      >Title:</label
    >
    <input
      id="title"
      type="text"
      class="py-2 mb-10 border-2 border-gray-400 focus:border-green-700 rounded-lg outline-0 px-4 w-full"
      placeholder="#Add a title"
    />
    <label
      for="content"
      class="text-green-700 text-base sm:text-xl font-semibold"
    >
      Description:
    </label>
    <textarea
      id="content"
      rows="6"
      class="border-2 p-4 w-full mb-10 rounded-lg border-gray-400 focus:border-green-700 outline-0"
      placeholder="#Add a short description"
    />
    <label
      for="tag-component"
      class="text-green-700 text-base sm:text-xl font-semibold"
      >Select tags from below:</label
    >
    <div id="tag-component"></div>
    <div v-if="imageUpload">
      <div>
        <span class="text-green-700 text-base sm:text-xl font-semibold"
          >Attachments:</span
        >
        <div
          @change="handleChange"
          class="flex items-center justify-center p-4 mb-5 bg-gray-100 rounded-md border-dashed border-2 border-green-700 cursor-pointer"
        >
          <input type="file" class="w-full hidden" id="fileInput" />
          <label for="fileInput" class="w-full cursor-pointer">
            Choose a File
          </label>
        </div>
      </div>
      <div class="mb-5">
        <div
          class="flex items-center"
          v-for="(item, index) in files"
          :key="index"
        >
          <span class="border-dashed border-2 border-gray-400 px-4 py-2">{{
            item.name
          }}</span>
          <span @click="handleDelete(item)" class="ml-4 cursor-pointer"
            ><img :src="icon"
          /></span>
        </div>
      </div>
    </div>
    <button
      class="py-2 px-6 duration-150 ease-in-out text-white font-semibold shadow-2xl bg-green-700 text-base rounded-lg w-full sm:w-full md:w-fit"
    >
      Submit
    </button>
  </form>
</template>

<script>
import crossIcon from "../assets/delete_icon.svg";
export default {
  props: ["imageUpload"],
  data() {
    return {
      icon: crossIcon,
      files: new Set(),
    };
  },
  methods: {
    handleChange(e) {
      this.files.add(e.target.files[0]);
    },
    handleDelete(fileName) {
      this.files.delete(fileName);
    },
  },
};
</script>

<style></style>
