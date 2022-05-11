<template>
  <li>
    <header>
      <h2>{{ resource.title }}</h2>
      <button>Delete</button>
    </header>
    <ul>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link">Visit a website</a>
      </nav>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['resource'],
};
</script>
