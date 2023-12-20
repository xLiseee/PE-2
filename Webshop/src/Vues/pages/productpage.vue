<script setup>

import HeaderComponent from "@/Vues/components/HeaderComponent.vue";
import FooterComponent from "@/Vues/components/FooterComponent.vue";
import ProductCardComponent from "@/Vues/components/ProductCardComponent.vue";
import '../../scss/styles.scss';
import {useProductsStore} from "@/stores/product.js";
import {useRoute} from "vue-router";

const route = useRoute();
const productId = route.params.productId;

const productsStore = useProductsStore();

const product = productsStore.products.find(p => {
  return p.id === productId
});
</script>

<template>
  <div>
    <HeaderComponent/>
    <ProductCardComponent v-bind:product="product"/>
    <FooterComponent/>
  </div>
</template>

<style scoped>

</style>