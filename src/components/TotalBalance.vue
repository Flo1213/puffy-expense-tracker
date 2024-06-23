<template>
  <section class="section section-balance">
    <h3 class="heading-third">Your Balance</h3>
    <p class="balance__text">${{ totalBalance }}</p>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  totalBalance: {
    type: Number,
    require: true
  }
})
</script>

<style scoped>
.section-balance {
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: var(--font-normal-black);
}

.heading-third {
  font-size: 2rem;
}

.balance__text {
  font-size: 1.6rem;
}
</style>
