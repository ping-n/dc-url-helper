<script>
  import Table from "../components/Table.svelte";
  import { mainUrl } from "../data/data-store";
</script>

<Table tableData={$mainUrl} />
