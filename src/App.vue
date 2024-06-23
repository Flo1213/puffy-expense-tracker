<template>
  <AppHeader />
  <div class="container">
    <TotalBalance :totalBalance="totalBalance" />
    <ExpenseType :calcIncome="calcIncome" :calcExpense="calcExpense" />
    <HistoryTrack :transactions="transactions" @transactionDelete="handleTransactionDelete" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmit" />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import TotalBalance from './components/TotalBalance.vue'
import ExpenseType from './components/ExpenseType.vue'
import HistoryTrack from './components/HistoryTrack.vue'
import AddTransaction from './components/AddTransaction.vue'

import { computed, ref, onMounted } from 'vue'

const transactions = ref([])

onMounted(() => {
  const saveTransactions = JSON.parse(localStorage.getItem('transactions'))

  if (saveTransactions) {
    transactions.value = saveTransactions
  }
})

const totalBalance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})

const calcIncome = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount > 0
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
})

const calcExpense = computed(() => {
  return transactions.value
    .filter((transaction) => {
      return transaction.amount < 0
    })
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
})

// Add Transactions
const handleTransactionSubmit = (transactionData) => {
  transactions.value.push({
    id: randomTransactionId(),
    type: transactionData.type,
    amount: transactionData.amount
  })

  savedTransactionsToLocalStorage()
}
// Generate random ID
const randomTransactionId = () => {
  return Math.floor(Math.random() * 10000)
}

// Delete transaction
const handleTransactionDelete = (transactionId) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== transactionId)
}

// Save to localStorage
const savedTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<style scoped>
.section {
  padding: 2rem 0;
}
</style>
