<template>
  <div class="px-10 sm:px-12 flex sm:mt-12 gap-2 sm:gap-4 w-fit">
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button1 }"
      name="firstButton"
      class="outline-0 shadow-lg font-semibold border-1 text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      + Issues
    </button>
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button2 }"
      name="secondButton"
      class="outline-0 font-semibold border-1 shadow-lg text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      + Task
    </button>
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button3 }"
      name="thirdButton"
      class="outline-0 font-semibold border-1 shadow-lg text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      + Learning
    </button>
  </div>
  <form-component v-if="selectedButton.button1" :imageUpload="true" />
  <form-component v-else-if="selectedButton.button2" />
  <tag-form-component v-else :tagsArray="tagsArray" />
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import TagFormComponent from "@/components/TagFormComponent.vue";
import Tags from "../../data/data";
export default {
  components: { FormComponent, TagFormComponent },
  data() {
    return {
      selectedButton: {
        button1: true,
        button2: false,
        button3: false,
      },
      tagsArray: Tags,
    };
  },
  methods: {
    handleClick(e) {
      const buttonName = e.target.name;
      if (buttonName === "firstButton") {
        this.selectedButton.button1 = true;
        this.selectedButton.button2 = false;
        this.selectedButton.button3 = false;
      } else if (buttonName === "secondButton") {
        this.selectedButton.button1 = false;
        this.selectedButton.button2 = true;
        this.selectedButton.button3 = false;
      } else {
        this.selectedButton.button1 = false;
        this.selectedButton.button2 = false;
        this.selectedButton.button3 = true;
      }
    },
  },
  mounted() {
    this.selectedButton.button1 = true;
  },
};
</script>

<style></style>
