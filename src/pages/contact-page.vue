<script setup>
import { useRoute } from 'vue-router';
import cars from '/src/data/cars.json';
const { params } = useRoute();
const car = cars.find((car) => car.id === Number(params.id));
</script>

<template>
  <h1>Contact Info</h1>
  <p>{{ car.contact.dealer }}</p>
  <p>{{ car.contact.number }}</p>
</template>

<style scoped></style>
