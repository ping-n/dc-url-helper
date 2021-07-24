<script context="module">
  import db from "$lib/data/db";
  import Table from "$lib/components/Table.svelte";
  import Loader from "$lib/components/Loader.svelte";

  export async function load() {
    const data = await db.registration.all();
    return {
      props: {
        registrationTable: data,
      },
    };
  }
</script>

<script>
  export let registrationTable;
</script>

<svelte:head>
  <title>Registation URL</title>
</svelte:head>

{#await registrationTable}
  <Loader />
{:then data}
  <Table tableData={data} />
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <p class="text-red">{error}</p>
{/await}
