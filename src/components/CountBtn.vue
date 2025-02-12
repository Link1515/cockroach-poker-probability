<script setup>
import { ref } from 'vue';
import { vOnLongPress } from '@vueuse/components';
import ModifyCountModal from '~/components/ModifyCountModal.vue';
import { capitalize } from '~/utils/capitalize';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  increment: {
    type: Function,
    required: true,
  },
  decrement: {
    type: Function,
    required: true,
  },
  shrink: {
    type: Boolean,
    default: false,
  },
});

const show = ref(false);
const count = defineModel('count');

const showModal = () => {
  show.value = true;
};

function increment() {
  count.value = props.increment(props.name, count.value);
}

function decrement() {
  count.value = props.decrement(count.value);
}

const longPressOptions = {
  onMouseUp(duration, distance, isLongPress) {
    if (!isLongPress) {
      increment();
    }
  },
};
</script>

<template>
  <div>
    <button
      class="relative cursor-pointer"
      v-on-long-press="[showModal, longPressOptions]"
    >
      <div class="absolute top-0 left-0 h-full w-full"></div>
      <img
        class="aspect-square transition-transform duration-500 select-none"
        :style="props.shrink ? 'transform: scale(0.6)' : ''"
        :src="props.image"
        :alt="props.name"
        width="250"
        height="250"
        draggable="false"
      />
    </button>
    <p class="text-center text-xl font-bold">{{ count }}</p>

    <ModifyCountModal v-model="show">
      <div>
        <div>
          <h3 class="text-center text-2xl font-bold">
            {{ capitalize(props.name) }}
          </h3>
          <img
            class="aspect-square select-none"
            :src="props.image"
            :alt="props.name"
            width="250"
            height="250"
            draggable="false"
          />
        </div>
        <div class="flex items-center justify-center gap-2 text-2xl">
          <button @click="decrement">
            <i class="bi bi-dash"></i>
          </button>
          <span>{{ count }}</span>
          <button @click="increment">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </ModifyCountModal>
  </div>
</template>
