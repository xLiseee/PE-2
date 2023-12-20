<script setup>

</script>

<template>
  <main>
  <div class="login-container">
    <h1>We zijn blij om je terug te zien! <br>
      vul je inloggegevens in:</h1>
    <form class="login-form" action="#">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Password" required>
      <a href="#" class="forgot-password">Forgot your password?</a>

      <button type="submit">Login</button>
    </form>
  </div>
  </main>
</template>

<style scoped>

</style>