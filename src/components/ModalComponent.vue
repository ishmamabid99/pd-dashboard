<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
  >
    <div class="bg-white p-8 rounded shadow-md">
      <!-- Modal content -->
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <!-- Close button -->
      <button
        @click="isOpen = false"
        class="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>