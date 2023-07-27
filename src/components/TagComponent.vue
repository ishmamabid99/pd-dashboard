<template>
  <p
    v-if="fullView"
    class="w-fit h-fit text-white bg-green-800 text-base px-2 rounded-2xl m-1"
  >
    #{{
      tagText.title.length > limitTagText ? sliceTagText + " ..." : sliceTagText
    }}
  </p>
  <p
    v-else
    class="w-fit h-fit text-white bg-green-800 text-base px-2 rounded-2xl m-1"
  >
    #{{ tagText.title }}
  </p>
</template>

<script>
export default {
  props: ["tagText", "fullView"],
  data() {
    return {
      limitTagText: 14,
    };
  },
  computed: {
    sliceTagText() {
      const title = this.tagText.title;
      return title.slice(0, this.limitTagText);
    },
  },
};
</script>

<style></style>
