<script>
  import "../tailwind.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<main class="min-h-screen my-10 mx-2">
  <slot />
</main>
<Footer />
