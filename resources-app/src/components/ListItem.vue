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

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
