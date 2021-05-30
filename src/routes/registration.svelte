<script>
  import Table from "../components/Table.svelte";
  import { registrationUrl } from "../data/data-store";
</script>

<Table tableData={$registrationUrl} />
