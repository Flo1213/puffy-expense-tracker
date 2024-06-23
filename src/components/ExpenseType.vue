<template>
  <section class="section section-type">
    <div class="type type__income">
      <p class="type__heading type__heading--income">Income</p>
      <p class="type__amount type__amount--income">${{ calcIncome }}</p>
    </div>
    <div class="type type__expense">
      <p class="type__heading type__heading--expense">Expense</p>
      <p class="type__amount type__amount--expense">${{ calcExpense }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  calcIncome: {
    type: Number,
    require: true
  },
  calcExpense: {
    type: Number,
    require: true
  }
})
</script>

<style scoped>
.section-type {
  position: relative;
  color: var(--font-normal-black);
  background-color: var(--color-block);
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.185);

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.section-type::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 50%;
  height: 80%;
  width: 1px;
  background-color: #ccc;
}

.type {
  font-size: 1.6rem;
  text-align: center;
}

.type__heading {
  font-weight: 700;
}

.type__amount--expense {
  color: var(--color-expense);
}

.type__amount--income {
  color: var(--color-income);
}
</style>
