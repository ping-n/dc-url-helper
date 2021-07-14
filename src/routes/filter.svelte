<script>
  import Table from "$lib/components/Table.svelte";
  import { filteredUrl } from "$lib/stores/data-store";
</script>

<svelte:head>
  <title>Filtered URL</title>
</svelte:head>

<Table tableData={$filteredUrl} />
