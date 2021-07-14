<script>
  import Table from "../components/Table.svelte";
  import { mainUrl } from "../store/data-store";
</script>

<svelte:head>
  <title>Main URL</title>
</svelte:head>

<Table tableData={$mainUrl} />
