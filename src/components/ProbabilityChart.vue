<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, computed } from 'vue';

const props = defineProps({
  species: {
    type: Array,
    required: true
  },
  tableCards: {
    type: Object,
    required: true
  },
  handCards: {
    type: Object,
    required: true
  }
});

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const data = [];
const TOTAL_PER_SPECIES = 8;
const totalCards = computed(() => {
  let total = 64;
  Object.values(props.tableCards).forEach(v => {
    total -= v;
  });
  Object.values(props.handCards).forEach(v => {
    total -= v;
  });
  return total;
});

props.species.forEach(s => {
  const name = s.name.charAt(0).toUpperCase() + s.name.slice(1);
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
      color: '#fff',
      fontWeight: 'normal'
    },
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%'
  },
  series: {
    type: 'pie',
    label: {
      show: false
    },
    data,
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
});
</script>

<template>
  <v-chart style="height: 400px" :option="option" autoresize />
</template>
