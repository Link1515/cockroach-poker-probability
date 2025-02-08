<script setup>
import { VueFinalModal } from 'vue-final-modal';
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-gray-900 border-gray-700 rounded-lg space-y-2"
  >
    <slot />
  </VueFinalModal>
</template>
