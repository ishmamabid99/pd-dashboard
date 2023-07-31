<template>
  <div>
    <div
      @click="toggleModal"
      class="cursor-pointer bg-green-600 w-8 h-8 md:w-10 md:h-10 p-2 rounded-full shadow-2xl float-right top-0 mt-8 md:mt-2 mr-12"
    >
      <img class="h-full" :src="plusIcon" />
    </div>
  </div>
  <form
    @submit.prevent
    class="h-auto bg-gray-50 shadow-md mt-12 md:mt-8 px-2 sm:px-6 md:px-40 mx-4 py-12"
  >
    <label
      for="select-container"
      class="text-green-700 text-base sm:text-xl font-semibold"
      >Select from below tags:</label
    >
    <div class="flex flex-wrap mt-2">
      <span
        class="w-fit h-fit text-white text-base px-2 rounded-2xl m-1"
        :class="selectedTags.includes(item) ? 'bg-gray-500' : 'bg-blue-800'"
        v-for="item in tagsArray"
        :key="item.id"
      >
        <input
          hidden
          type="checkbox"
          :value="item"
          v-model="selectedTags"
          :id="item.id"
        />
        <label :for="item.id" class="cursor-pointer">{{ item.title }}</label>
      </span>
    </div>
    <div class="w-fit mt-2 mb-4">
      <div
        for
        v-for="item in selectedTags"
        :key="item.id"
        class="flex items-center justify-items-start gap-2 m-1 flex-wrap"
      >
        <span
          class="w-fit h-fit text-white px-2 rounded-2xl m-0 text-sm sm:text-base"
          :class="
            item.status == 'bg'
              ? 'bg-blue-800'
              : item.status === 'md'
              ? 'bg-yellow-500'
              : 'bg-green-700'
          "
          >{{ item.title }}</span
        >
        <select
          class="text-base outline-0"
          @change="handleChange($event, item)"
        >
          <option :selected="item.status === 'bg'" value="bg">Beginner</option>
          <option :selected="item.status === 'md'" value="md">Medium</option>
          <option :selected="item.status === 'adv'" value="adv">Advance</option>
        </select>
        <label :for="item.id" class="shrink-0 ml-4 cursor-pointer"
          ><img :src="deleteIcon"
        /></label>
      </div>
    </div>
    <button
      v-if="selectedTags && selectedTags.length"
      class="py-2 px-6 duration-150 ease-in-out text-white font-semibold shadow-2xl bg-green-700 text-base rounded-lg w-full sm:w-full md:w-fit"
    >
      Save
    </button>
  </form>
  <modal-component
    v-if="openModal"
    :tagFormComponent="true"
    @close="toggleModal"
    @saveClose="handleTagFormData"
  >
    <template v-slot:title>
      <div class="text-lg text-green-700 flex px-6 py-2 border-b-2">
        Add a new Tag
      </div>
    </template>
    <template v-slot:body>
      <form
        class="h-auto bg-gray-50 shadow-md mt-12 md:mt-8 px-2 sm:px-6 md:px-12 sm:mx-4 py-12 flex flex-col gap-4 justify-center"
      >
        <div>
          <label
            for="tag-title"
            class="text-green-700 text-base sm:text-xl font-semibold"
            >Title:</label
          >
          <input
            v-model="newTitle"
            id="tag-title"
            class="outline-green-700 border-2 px-2 py-2 rounded-lg text-base w-full"
            type="text"
            placeholder="Name of your tag"
          />
        </div>
        <div>
          <label
            class="text-green-700 text-base sm:text-xl font-semibold"
            for="status"
            >Add your Expertise level:</label
          >
          <select
            v-model="newStatus"
            id="status"
            class="text-base outline-0 p-2 bg-white border-2 rounded-lg w-full"
          >
            <option value="bg">Beginner</option>
            <option value="md">Medium</option>
            <option value="adv">Advance</option>
          </select>
          <button></button>
        </div>
      </form>
    </template>
  </modal-component>
</template>

<script>
import deleteIcon from "../assets/delete_icon.svg";
import plusIcon from "../assets/plus_sign.svg";
import ModalComponent from "./ModalComponent.vue";
export default {
  components: { ModalComponent },
  props: ["tagsArray"],
  data() {
    return {
      newTitle: "",
      newStatus: "",
      openModal: true,
      deleteIcon: deleteIcon,
      plusIcon: plusIcon,
      selectedTags: [],
    };
  },
  methods: {
    handleChange(event, item) {
      item.status = event.target.value;
    },
    toggleModal() {
      this.openModal = !this.openModal;
    },
    handleTagFormData() {
      this.toggleModal();
      console.log(this.newTitle);
    },
  },
};
</script>

<style>
</style>