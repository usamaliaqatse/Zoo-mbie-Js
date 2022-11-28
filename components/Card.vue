<template>
  <div
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5
      class="mb-2 p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ text }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: {
      type: String,
      default: "N/A",
    },
  },
};
</script>
