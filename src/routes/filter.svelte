<script>
  import Table from "../components/Table.svelte";
  import { filteredUrl } from "../data/data-store";
</script>

<svelte:head>
  <title>Filtered URL</title>
</svelte:head>

<Table tableData={$filteredUrl} />
