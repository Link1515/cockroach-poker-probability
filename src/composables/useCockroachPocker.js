import { ref } from 'vue';
import batIcon from '~/assets/bat.svg';
import bugIcon from '~/assets/bug.svg';
import cockroachIcon from '~/assets/cockroach.svg';
import flyIcon from '~/assets/fly.svg';
import frogIcon from '~/assets/frog.svg';
import ratIcon from '~/assets/rat.svg';
import scorpionIcon from '~/assets/scorpion.svg';
import spiderIcon from '~/assets/spider.svg';

export function useCockroachPocker() {
  const species = [
    { name: 'bat', icon: batIcon, color: '#8577bf' },
    { name: 'bug', icon: bugIcon, color: '#c4d712' },
    { name: 'cockroach', icon: cockroachIcon, color: '#fb7e36' },
    { name: 'fly', icon: flyIcon, color: '#009893' },
    { name: 'frog', icon: frogIcon, color: '#878d22' },
    { name: 'rat', icon: ratIcon, color: '#cf9b7a' },
    { name: 'scorpion', icon: scorpionIcon, color: '#a5b79c' },
    {
      name: 'spider',
      icon: spiderIcon,
      color: '#a9a79c'
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

  return {
    species,
    tableCards,
    handCards,
    countIncrement,
    countDecrement
  };
}
