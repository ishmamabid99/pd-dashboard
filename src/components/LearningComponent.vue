<template>
  <div class="h-96 w-64 ml-4 mb-4 mr-2 p-6 bg-gray-50 shadow-md">
    <!-- titles -->
    <div class="">
      <p class="text-green-600">@Azizul Haque Imon Chowdhury</p>
      <p class="w-2/3 float-right text-sm text-right">
        - Associate Software Engineer
      </p>
    </div>
    <!-- tags -->
    <div class="w-it mt-20 flex flex-wrap overflow-y-hidden">
      <tag-component
        v-for="(item, index) in filteredTags"
        :tagText="item"
        :key="index"
      />
      <span
        v-if="tagsArray.length > tagsLength"
        @mouseover="toggleShow"
        class="text-sm flex items-center ml-2 float-right text-green-700 cursor-pointer"
      >
        ...see more</span
      >
    </div>
  </div>
  <modal-component v-if="showModal" @close="toggleShow" :tagComponent="true">
    <template v-slot:title>
      <div class="text-lg text-green-700 flex px-6 py-2 border-b-2">SKILLS</div>
    </template>
    <template v-slot:content>
      <tag-component
        :fullView="true"
        v-for="(item, index) in tagsArray"
        :tagText="item"
        :key="index"
      />
    </template>
  </modal-component>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
import TagComponent from "./TagComponent.vue";

export default {
  components: { TagComponent, ModalComponent },
  data() {
    return {
      tagsLength: 10,
      showModal: false,
      showMore: false,
      timeOutId: null,
      tagsArray: [
        {
          title: "React",
          status: "adv",
        },
        {
          title: "Vue",
          status: "bg",
        },
        {
          title: "Angular",
          status: "md",
        },
        {
          title: "Svelte",
          status: "adv",
        },
        {
          title: "Ember",
          status: "bg",
        },
        {
          title: "Backbone",
          status: "md",
        },
        {
          title: "jQuery",
          status: "adv",
        },
        {
          title: "Lodash",
          status: "bg",
        },
        {
          title: "Bootstrap",
          status: "md",
        },
        {
          title: "Material-UI",
          status: "adv",
        },
        // Add more objects as needed to make the total count 30
        {
          title: "D3.js",
          status: "adv",
        },
        {
          title: "Express.js",
          status: "bg",
        },
        {
          title: "Next.js",
          status: "md",
        },
        {
          title: "Redux",
          status: "adv",
        },
        {
          title: "TypeScript",
          status: "bg",
        },
        {
          title: "Webpack",
          status: "md",
        },
        {
          title: "GraphQL",
          status: "adv",
        },
        {
          title: "Jest",
          status: "bg",
        },
        {
          title: "Gatsby",
          status: "md",
        },
        {
          title: "Sass",
          status: "adv",
        },
        {
          title: "Less",
          status: "bg",
        },
        {
          title: "Nuxt.js",
          status: "md",
        },
        {
          title: "jQuery UI",
          status: "adv",
        },
        {
          title: "Bulma",
          status: "bg",
        },
        {
          title: "Chakra UI",
          status: "md",
        },
        {
          title: "Storybook",
          status: "adv",
        },
        {
          title: "Framer Motion",
          status: "bg",
        },
        {
          title: "Ant Design",
          status: "md",
        },
        {
          title: "Three.js",
          status: "adv",
        },
        {
          title: "React Router",
          status: "bg",
        },
        {
          title: "Materialize CSS",
          status: "md",
        },
      ],
    };
  },
  methods: {
    toggleShow() {
      this.timeOutId = setTimeout(() => {
        this.showModal = !this.showModal;
      }, 300);
    },
    clear() {
      clearTimeout(this.timeOutId);
    },
  },
  mounted() {
    if (this.tagsArray.length > 10) this.showMore = true;
  },
  computed: {
    filteredTags() {
      return this.tagsArray.slice(0, this.tagsLength);
    },
    filterAdvancedTags() {
      return this.tagsArray.filter((tag) => tag.staus === "adv");
    },
    filterMediumTags() {
      return this.tagsArray.filter((tag) => tag.status === "md");
    },
    filterBeginerTags() {
      return this.tagsArray.filter((tag) => tag.status === "bg");
    },
  },
};
</script>

<style></style>
