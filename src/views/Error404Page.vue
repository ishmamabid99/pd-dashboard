<template>
  <div class="flex justify-center items-center h-fit">
    <div class="error-box p-8 rounded-lg bg-gray-50 shadow-md text-center">
      <h1 class="text-4xl font-bold mb-4">Oops!</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto h-16 w-16 mt-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1" />
        <circle cx="16" cy="10" r="1" />
        <path d="M9 15s1.5 1.5 3 0" />
      </svg>
      <p class="text-lg text-gray-600">
        Something went wrong. The page you are looking for doesn't exist.
      </p>
      <button
        @click="reloadPage"
        class="mt-4 bg-green-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
.error-box {
  max-width: 400px;
}
</style>
