<script setup>
import { ModalsContainer } from 'vue-final-modal';
import CountBtn from '~/components/CountBtn.vue';
import { useCockroachPocker } from '~/composables/useCockroachPocker';

const { species, tableCards, handCards, countIncrement, countDecrement } =
  useCockroachPocker();
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
