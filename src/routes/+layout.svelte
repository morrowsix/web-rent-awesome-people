<script>
  import "../app.postcss";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import CookieConsentComponent from '$lib/cookieconsent.svelte';
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <Footer />
  </footer>
  <CookieConsentComponent/>
</div>
