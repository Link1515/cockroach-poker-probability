<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, computed } from 'vue';
import { capitalize } from '~/utils/capitalize';

const props = defineProps({
  species: {
    type: Array,
    required: true,
  },
  tableCards: {
    type: Object,
    required: true,
  },
  handCards: {
    type: Object,
    required: true,
  },
});

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const data = [];
const TOTAL_PER_SPECIES = 8;
const totalCards = computed(() => {
  let total = 64;
  Object.values(props.tableCards).forEach((v) => {
    total -= v;
  });
  Object.values(props.handCards).forEach((v) => {
    total -= v;
  });
  return total;
});

props.species.forEach((s) => {
  const name = capitalize(s.name);
  const value = computed(() => {
    let v =
      (TOTAL_PER_SPECIES - props.tableCards[s.name] - props.handCards[s.name]) /
      totalCards.value;
    return (v * 100).toFixed(2);
  });
  data.push({ value, name, itemStyle: { color: s.color } });
});

const option = ref({
  backgroundColor: 'oklch(0.21 0.034 264.665)',
  title: {
    text: '出現機率',
    textStyle: {
      color: 'oklch(0.872 0.01 258.338)',
      fontWeight: 'normal',
    },
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%',
    backgroundColor: 'oklch(0.21 0.034 264.665)',
    textStyle: {
      color: 'oklch(0.872 0.01 258.338)',
    },
  },
  series: {
    type: 'pie',
    radius: '80%',
    label: {
      show: false,
    },
    data,
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
});
</script>

<template>
  <v-chart style="height: 400px" :option="option" autoresize />
</template>
