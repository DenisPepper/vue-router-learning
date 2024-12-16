<script setup>
import { useRoute } from 'vue-router';
import cars from '/src/data/cars.json';
const { params } = useRoute();
const car = cars.find((car) => car.id === Number(params.id));
</script>

<template>
  <article>
    <h2>{{ car.name }}</h2>
    <p>{{ car.price }}</p>
    <p>{{ car.year }}</p>
  </article>
</template>

<style scoped></style>
