<script setup>
import { RouterLink as Link } from 'vue-router';
import cars from '/src/data/cars.json';
</script>

<template>
  <div>
    <h1>Home page</h1>
    <ul class="cars-list">
      <li class="car-item" v-for="car of cars" :key="car.id">
        <Link :to="`/cars/${car.id}`">{{ car.name }}</Link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cars-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.car-item {
  border: 2px solid white;
  padding: 1.5rem;
}

.car-item *:any-link {
  color: white;
  text-decoration: none;
}
</style>
