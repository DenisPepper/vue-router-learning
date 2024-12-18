<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import cars from '/src/data/cars.json';

const { params, fullPath } = useRoute();
const router = useRouter();

const car = cars.find((car) => car.id === Number(params.id));

const goToContact = () => car.contact && router.push(`${fullPath}/contact`);
</script>

<template>
  <article v-if="car">
    <h2>{{ car.name }}</h2>
    <p>{{ car.price }}</p>
    <p>{{ car.year }}</p>
    <button v-if="car.contact" @click="goToContact">Click for contact</button>
    <RouterView />
  </article>
  <div v-else>Машина не найдена</div>
</template>

<style scoped></style>
