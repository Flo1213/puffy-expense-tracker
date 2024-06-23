<template>
  <section class="section section-transaction">
    <h3 class="heading-third">Add New Transaction</h3>
    <form action="" class="transaction__form" @submit.prevent="submit">
      <div class="form__control">
        <label for="type">Type</label>
        <input v-model="type" class="form__type" id="type" type="text" placeholder="Enter type" />
      </div>

      <div class="form__control">
        <label for="amount">Amount</label>
        <p class="amount__comment">(positive-income,negative-expense)</p>
        <input
          v-model="amount"
          class="form__type"
          id="amount"
          type="numeric"
          placeholder="Enter amount"
        />
      </div>

      <button class="btn">Add Transaction</button>
    </form>
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useToast } from 'vue-toastification'

const props = defineProps({
  transactions: {
    type: Array,
    require: true
  }
})
const emit = defineEmits(['transactionSubmitted'])

const toast = useToast()

const type = ref('')
const amount = ref('')

const submit = function () {
  if (!type.value || !amount.value) {
    toast.error('Both fields need to be filled')
    return
  }

  const transactionData = {
    type: type.value,
    amount: +amount.value
  }

  emit('transactionSubmitted', transactionData)

  type.value = ''
  amount.value = ''
}
</script>

<style scoped>
.heading-third {
  font-size: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #999;
}

.transaction__form {
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
}

.form__control {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
}

.form__control label {
  font-weight: 600;
  font-size: 1.6rem;
}

.form__type {
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: var(--color-block);
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
}

.form__type:focus {
  background-color: var(--font-white);
  outline: none;
}

.btn {
  background-color: #824533;
  font-family: inherit;
  padding: 0.4rem 0.4rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
  border-radius: 5px;
  color: var(--font-white);

  transition: all 0.3s;
}

.btn:hover,
.btn:active {
  transform: translateY(-5px);
  background-color: #efcd76;
  color: var(--font-normal-black);
}
</style>
