<template>
    <div
      class="bg-white text-black dark:text-white dark:bg-black min-h-screen"
    >
      <!--<Header />-->
      <main class="mb-auto">
        <slot />
      </main>
      <!--<Footer />-->
    </div>
  </template>
  <script setup>
  // eslint-disable-next-line no-undef
  useHead({
    title: 'Michelle Espinoza - Portfolio'
  });
  </script>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap");
  </style>
  