<script setup>
import { ref } from 'vue';
import { ModalsContainer } from 'vue-final-modal';
import CountBtn from '~/components/CountBtn.vue';
import ProbabilityChart from '~/components/ProbabilityChart.vue';
import { useCockroachPocker } from '~/composables/useCockroachPocker';

const { species, tableCards, handCards, countIncrement, countDecrement } =
  useCockroachPocker();

const focusedSpecies = ref('');

function focusSpecies(name) {
  focusedSpecies.value = name;
}

function blurSpecies() {
  focusedSpecies.value = '';
}

function iconShouldShrink(name) {
  return focusedSpecies.value !== '' && focusedSpecies.value !== name;
}
</script>

<template>
  <div class="container my-4">
    <div class="mb-6 rounded-3xl border-2 border-gray-400 p-4">
      <h2 class="mb-4 text-center text-2xl">場上的牌</h2>
      <div class="grid grid-cols-4 gap-4 md:grid-cols-8">
        <CountBtn
          v-for="s in species"
          :name="s.name"
          :image="s.icon"
          v-model:count="tableCards[s.name]"
          :increment="countIncrement"
          :decrement="countDecrement"
          :shrink="iconShouldShrink(s.name)"
        />
      </div>
    </div>

    <ProbabilityChart
      :species="species"
      :table-cards="tableCards"
      :hand-cards="handCards"
      @focus="focusSpecies"
      @blur="blurSpecies"
    />

    <div class="rounded-3xl border-2 border-gray-400 p-4">
      <h2 class="mb-4 text-center text-2xl">手牌</h2>
      <div class="grid grid-cols-4 gap-4 md:grid-cols-8">
        <CountBtn
          v-for="s in species"
          :name="s.name"
          :image="s.icon"
          v-model:count="handCards[s.name]"
          :increment="countIncrement"
          :decrement="countDecrement"
          :shrink="iconShouldShrink(s.name)"
        />
      </div>
    </div>

    <ModalsContainer />
  </div>
</template>
