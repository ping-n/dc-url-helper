<script>
  import Table from "$lib/components/Table.svelte";
  import { registrationUrl } from "$lib/stores/data-store";
</script>

<svelte:head>
  <title>Registation URL</title>
</svelte:head>

<Table tableData={$registrationUrl} />
