<script setup>

</script>

<template>
  <main>
  <!-- Banner -->
  <section class="banner">
    <img src="../../assets/contact.png" alt="Banner Image">
  </section>
  <div class="contact-container">
    <h1>Heb je een vraag of opmerking? Neem dan contact met ons op via het onderstaande formulier.</h1>
    <form action="submit_form.php" method="POST">
      <label for="name">Naam & Voornaam:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="subject">Onderwerp:</label>
      <input type="text" id="subject" name="subject" required>

      <label for="message">Bericht:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Verzenden</button>
    </form>
  </div>
  </main>
</template>

<style scoped>

</style>