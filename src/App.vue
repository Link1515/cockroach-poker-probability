<script setup>
import { ModalsContainer } from 'vue-final-modal';
import batIcon from '~/assets/bat.svg';
import bugIcon from '~/assets/bug.svg';
import cockroachIcon from '~/assets/cockroach.svg';
import flyIcon from '~/assets/fly.svg';
import frogIcon from '~/assets/frog.svg';
import ratIcon from '~/assets/rat.svg';
import scorpionIcon from '~/assets/scorpion.svg';
import spiderIcon from '~/assets/spider.svg';
import CountBtn from '~/components/CountBtn.vue';
import { ref } from 'vue';

const species = [
  {
    name: 'bat',
    icon: batIcon
  },
  {
    name: 'bug',
    icon: bugIcon
  },
  {
    name: 'cockroach',
    icon: cockroachIcon
  },
  {
    name: 'fly',
    icon: flyIcon
  },
  {
    name: 'frog',
    icon: frogIcon
  },
  {
    name: 'rat',
    icon: ratIcon
  },
  {
    name: 'scorpion',
    icon: scorpionIcon
  },
  {
    name: 'spider',
    icon: spiderIcon
  }
];

const tableCards = ref({
  bat: 0,
  bug: 0,
  cockroach: 0,
  fly: 0,
  frog: 0,
  rat: 0,
  scorpion: 0,
  spider: 0
});

const handCards = ref({
  bat: 0,
  bug: 0,
  cockroach: 0,
  fly: 0,
  frog: 0,
  rat: 0,
  scorpion: 0,
  spider: 0
});

function countIncrement(name, count) {
  if (tableCards.value[name] + handCards.value[name] >= 8) return count;
  return count + 1;
}

function countDecrement(count) {
  if (count <= 0) return count;
  return count - 1;
}
</script>

<template>
  <div class="container my-4">
    <div>
      <h2 class="text-center mb-4 text-2xl">場上的牌</h2>
      <div class="grid grid-cols-4 xl:grid-cols-8 gap-4">
        <CountBtn
          v-for="s in species"
          :name="s.name"
          :image="s.icon"
          v-model:count="tableCards[s.name]"
          :increment="countIncrement"
          :decrement="countDecrement"
        />
      </div>
    </div>

    <div></div>

    <div>
      <h2 class="text-center mb-4 text-2xl">手牌</h2>
      <div class="grid grid-cols-4 xl:grid-cols-8 gap-4">
        <CountBtn
          v-for="s in species"
          :name="s.name"
          :image="s.icon"
          v-model:count="handCards[s.name]"
          :increment="countIncrement"
          :decrement="countDecrement"
        />
      </div>
    </div>

    <ModalsContainer />
  </div>
</template>
