<script>
  import "../tailwind.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<main class="mx-2">
  <slot />
</main>
<Footer />
