<template>
  <header>
    <h1 class="heading-primary">Puffy Expense Tracker</h1>
    <img class="header-img" src="../assets/images/header-img.webp" alt="" />
  </header>
</template>

<script setup></script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
}

.heading-primary {
  color: #b25a42;

  font-size: 3.2rem;
}

.header-img {
  height: 6rem;
  transform: translateX(10rem);
  animation: imgSlideIn 4s ease-in-out forwards;
}

@keyframes imgSlideIn {
  0% {
    transform: translateX(10rem) rotate(20deg);
  }

  10% {
    transform: translateX(10rem) rotate(20deg);
  }

  20% {
    transform: translateX(8rem) rotate(-20deg);
  }

  30% {
    transform: translateX(8rem) rotate(-20deg);
  }

  40% {
    transform: translateX(6rem) rotate(20deg);
  }

  50% {
    transform: translateX(6rem) rotate(20deg);
  }

  60% {
    transform: translateX(4rem) rotate(-20deg);
  }

  70% {
    transform: translateX(4rem) rotate(-20deg);
  }

  80% {
    transform: translateX(2rem) rotate(20deg);
  }

  90% {
    transform: translateX(2rem) rotate(20deg);
  }

  100% {
    transform: translateX(0) rotate(0);
  }
}
</style>
