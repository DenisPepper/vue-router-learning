<script setup>
import { RouterLink as Link } from 'vue-router';
</script>

<template>
  <nav>
    <ul class="links">
      <li class="link"><Link active-class="active" to="/">Home page</Link></li>
      <li class="link"><Link active-class="active" to="/about">About page</Link></li>
    </ul>
  </nav>
</template>

<style scoped>
.links {
  height: 3rem;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: gray;
}

.link *:any-link {
  color: black;
  text-decoration: none;
}

.link *:any-link.active {
  color: brown;
}
</style>
