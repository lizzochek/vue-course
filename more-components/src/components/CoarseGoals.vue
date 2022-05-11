<template>
  <ul>
    <li v-for="(goal, index) in goals" :key="index">
      <slot :item="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Learn Vue", "Become a master"],
    };
  },
};
</script>
