<template>
  <li>
    <h2>{{ resource.title }}</h2>
    <ul>
      <li>{{ resource.description }}</li>
      <li><a :href="resource.link">Visit a website</a></li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['resource'],
};
</script>
