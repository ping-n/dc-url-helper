<script>
  import Table from "../components/Table.svelte";
  import { registrationUrl } from "../data/data-store";
</script>

<svelte:head>
  <title>Registation URL</title>
</svelte:head>

<Table tableData={$registrationUrl} />
