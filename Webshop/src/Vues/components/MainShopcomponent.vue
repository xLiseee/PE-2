<script setup>

import PopulairProductsComponents from "@/Vues/components/PopulairProductsComponents.vue";
</script>

<template>
  <section class="banner">
    <img src="../../assets/DeLeuksteCadeautjes.png" alt="Banner Image">
  </section>
  <main>
    <div class="product-introduction">
      <h1>Ben je op zoek naar een uniek cadeautje voor jezelf of voor iemand anders? Hier vind je de aller leukste spulletjes!</h1>
    </div>
    <div class="container">
      <aside class="filter-zone">
        <h2>Categorieën</h2>
        <ul>
          <li><a href="#">Kleding</a></li>
          <li><a href="#">Kaartjes</a></li>
        </ul>
      </aside>
      <section id="homepage-products">

          <PopulairProductsComponents/>

      </section>
    </div>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#" class="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">&raquo;</a>
    </div>
  </main>
</template>

<style scoped>

</style>