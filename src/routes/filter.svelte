<script>
  import Table from "../components/Table.svelte";
  import { filteredUrl } from "../store/data-store";
</script>

<svelte:head>
  <title>Filtered URL</title>
</svelte:head>

<Table tableData={$filteredUrl} />
