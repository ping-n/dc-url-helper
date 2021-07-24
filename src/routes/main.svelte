<script>
  import supabase from "$lib/data/db";
  import Table from "$lib/components/Table.svelte";
  import Loader from "$lib/components/Loader.svelte";

  async function getData() {
    const { data, error } = await supabase.from("main").select("*");
    if (error) throw new Error(error.message);
    return data;
  }
</script>

<svelte:head>
  <title>Main URL</title>
</svelte:head>

{#await getData()}
  <Loader />
{:then data}
  <Table tableData={data} />
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <p class="text-red">{error}</p>
{/await}
