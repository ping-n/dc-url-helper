<script>
  import { routes } from "$lib/utils/constant";
  let firstUrl = routes[0];
</script>

<svelte:head>
  <title>DC URL</title>
</svelte:head>

<div class="container px-5 py-5 mx-auto">
  <h1 class="text-3xl font-bold text-center text-blue-500">DC URL HELPER</h1>

  <div
    class="flex min-h-full min-w-4/5 flex-col justify-items-center text-left uppercase font-bold mb-4"
  >
    {#each routes as route, index}
      {#if index == 0}
        <div class="main-link mt-5">
          <a href={route.path}>{route.name}</a>
        </div>
      {:else}
        <div class="main-link">
          <a href={route.path}>{route.name}</a>
        </div>
      {/if}
    {/each}
  </div>
</div>
