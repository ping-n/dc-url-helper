<script context="module">
  import db from "$lib/data/db";
  import Table from "$lib/components/Table.svelte";
  import Loader from "$lib/components/Loader.svelte";

  export async function load() {
    const data = await db.filter.all();
    return {
      props: {
        filterTable: data,
      },
    };
  }
</script>

<script>
  export let filterTable;
</script>

<svelte:head>
  <title>Filter URL</title>
</svelte:head>

{#await filterTable}
  <Loader />
{:then data}
  <Table tableData={data} />
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <p class="text-red">{error}</p>
{/await}
