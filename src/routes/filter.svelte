<script>
  import Table from "../components/Table.svelte";
  import { filteredUrl } from "../data/data-store";
</script>

<Table tableData={$filteredUrl} />
