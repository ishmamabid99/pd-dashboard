<template>
  <div class="w-fit mt-12 mx-4 sm:px-12 sm:flex gap-6">
    <div class="flex justify-start items-center gap-2">
      <div class="w-16 h-1.5 rounded-3xl bg-green-800"></div>
      <span class="text-sm font-semibold">Advance</span>
    </div>
    <div class="flex justify-start items-center gap-4">
      <div class="w-16 h-1.5 rounded-3xl bg-yellow-500"></div>
      <span class="text-sm font-semibold">Medium</span>
    </div>
    <div class="flex justify-start items-center gap-4">
      <div class="w-16 h-1.5 rounded-3xl bg-blue-800"></div>
      <span class="text-sm font-semibold">Learning</span>
    </div>
  </div>
  <div class="mt-12 flex flex-wrap justify-center">
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
    <learning-component />
  </div>
</template>

<script>
import LearningComponent from "@/components/LearningComponent.vue";

export default {
  components: { LearningComponent },
};
</script>

<style></style>
