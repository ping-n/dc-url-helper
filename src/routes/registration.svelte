<script>
  import supabase from "$lib/data/db";
  import Table from "$lib/components/Table.svelte";

  async function getData() {
    const { data, error } = await supabase.from("registration").select("*");
    if (error) throw new Error(error.message);
    return data;
  }
</script>

<svelte:head>
  <title>Registation URL</title>
</svelte:head>

{#await getData()}
  <p class="text-blue-500">Fetching data...</p>
{:then data}
  <Table tableData={data} />
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <p class="text-red">{error}</p>
{/await}
