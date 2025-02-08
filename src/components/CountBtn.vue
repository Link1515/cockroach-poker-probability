<script setup>
import { ref } from 'vue';
import { vOnLongPress } from '@vueuse/components';
import ModifyCountModal from '~/components/ModifyCountModal.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  increment: {
    type: Function,
    required: true
  },
  decrement: {
    type: Function,
    required: true
  }
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
  }
};
</script>

<template>
  <div>
    <button
      class="cursor-pointer"
      v-on-long-press="[showModal, longPressOptions]"
    >
      <img
        class="select-none"
        :src="props.image"
        :alt="props.name"
        draggable="false"
      />
    </button>
    <p class="text-center text-xl font-bold">{{ count }}</p>

    <ModifyCountModal v-model="show">
      <div>
        <div>
          <img
            class="select-none"
            :src="props.image"
            :alt="props.name"
            draggable="false"
          />
        </div>
        <div class="flex gap-2 justify-center items-center text-2xl text-white">
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
