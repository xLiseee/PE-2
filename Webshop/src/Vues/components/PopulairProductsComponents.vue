<script setup>
import {useProductsStore} from "@/stores/product.js";

const productsStore = useProductsStore();
const products = productsStore.products;
</script>

<template>
    <div v-for="product in products" class="product-card">
      <img v-bind:src=product.afbeelding alt="Product 1">
      <router-link :to="'/product/'+ product.id">
      <h3>{{product.titel}}</h3>
      <p>{{product.omschrijving}}</p>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag-plus"
             width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
             stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.263 1.708"/>
          <path d="M16 19h6"/>
          <path d="M19 16v6"/>
          <path d="M9 11v-5a3 3 0 0 1 6 0v5"/>
        </svg>
      </button>
      </router-link>
    </div>
</template>

<style scoped>

</style>