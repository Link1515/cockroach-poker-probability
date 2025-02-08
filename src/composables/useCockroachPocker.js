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
    { name: 'bat', icon: batIcon },
    { name: 'bug', icon: bugIcon },
    { name: 'cockroach', icon: cockroachIcon },
    { name: 'fly', icon: flyIcon },
    { name: 'frog', icon: frogIcon },
    { name: 'rat', icon: ratIcon },
    { name: 'scorpion', icon: scorpionIcon },
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

  return {
    species,
    tableCards,
    handCards,
    countIncrement,
    countDecrement
  };
}
