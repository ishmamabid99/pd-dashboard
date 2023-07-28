<template>
  <div
    @click.self="handleClose"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
  >
    <div class="bg-white p-8 rounded shadow-md">
      <!-- Modal content -->
      <div class="h-96 w-56 sm:w-[540px] md:w-[640px]">
        <h2 class="text-xl font-bold mb-4">
          <slot name="title"></slot>
        </h2>
        <div
          v-if="tagComponent"
          class="flex h-96 overflow-y-scroll mb-6 leading-tight"
        >
          <div class="h-fit flex-wrap flex">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
      <!-- Close button -->
      <button
        @click="handleClose"
        class="float-right mt-16 px-4 py-2 bg-gray-500 shadow-lg text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tagComponent"],
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
