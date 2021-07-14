<script>
  import Table from "$lib/components/Table.svelte";
  import { mainUrl } from "$lib/stores/data-store";
</script>

<svelte:head>
  <title>Main URL</title>
</svelte:head>

<Table tableData={$mainUrl} />
