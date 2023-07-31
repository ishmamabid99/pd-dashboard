<template>
  <div class="px-10 sm:px-12 flex sm:mt-12 gap-2 sm:gap-4 w-fit">
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button0 }"
      name="zeroButton"
      class="outline-0 shadow-lg font-semibold border-1 text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      My Blogs
    </button>
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button1 }"
      name="firstButton"
      class="outline-0 shadow-lg font-semibold border-1 text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      My Issues
    </button>
    <button
      @click="handleClick"
      :class="{ 'text-white bg-green-600': selectedButton.button2 }"
      name="secondButton"
      class="outline-0 font-semibold border-1 shadow-lg text-green-600 sm:w-32 bg-gray-50 rounded-xl px-4 py-1 gap-2"
    >
      My Tasks
    </button>
  </div>
  <div>
    <card-component
      v-if="selectedButton.button0 === true"
      :showAttachments="true"
      :showComments="true"
      :editView="true"
    />
    <card-component
      v-if="selectedButton.button1 === true"
      :showAttachments="true"
      :showComments="true"
      :editView="true"
    />
    <card-component v-if="selectedButton.button2 === true" :editView="true" />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
export default {
  components: { CardComponent },
  data() {
    return {
      selectedButton: {
        button0: true,
        button1: false,
        button2: false,
      },
    };
  },
  methods: {
    handleClick(e) {
      const buttonName = e.target.name;
      if (buttonName === "zeroButton") {
        this.selectedButton.button0 = true;
        this.selectedButton.button1 = false;
        this.selectedButton.button2 = false;
      } else if (buttonName === "firstButton") {
        this.selectedButton.button0 = false;
        this.selectedButton.button1 = true;
        this.selectedButton.button2 = false;
      } else {
        this.selectedButton.button0 = false;
        this.selectedButton.button1 = false;
        this.selectedButton.button2 = true;
      }
    },
  },
  mounted() {
    this.selectedButton.button0 = true;
  },
};
</script>

<style></style>
