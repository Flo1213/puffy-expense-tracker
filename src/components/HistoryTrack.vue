<template>
  <section class="section section-history">
    <h3 class="heading-third">History</h3>
    <ul class="history__list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="history__item"
        :class="`history__${transaction.amount > 0 ? 'income' : 'expense'} `"
      >
        {{ transaction.type }}<span>${{ transaction.amount }}</span
        ><button @click.prevent="deleteTransaction(transaction.id)" class="history__button btn">
          X
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['transactionDelete'])

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})

const deleteTransaction = (transactionId) => {
  emit('transactionDelete', transactionId)
}
</script>

<style scoped>
.heading-third {
  font-size: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #999;
}

.history__list {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.history__item {
  position: relative;
  font-size: 1.6rem;
  background-color: var(--color-block);
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-weight: 500;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
}

.history__expense:after {
  content: '';
  position: absolute;
  background-color: var(--color-expense);
  height: 100%;
  width: 5px;
  right: 0;
  top: 0;
}

.history__income:after {
  content: '';
  position: absolute;
  background-color: var(--color-income);
  height: 100%;
  width: 5px;
  right: 0;
  top: 0;
}

.history__button {
  color: var(--font-white);
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  height: 100%;
  padding: 0.5rem;
  transform: translate(-100%, -50%);
  background-color: #8d0801;
  transition: all 0.3s;
  opacity: 0;
}

.history__item:hover .history__button {
  opacity: 1;
}
</style>
