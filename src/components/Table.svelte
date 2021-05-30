<script>
  export let tableData;
</script>

<div class="overflow-x-auto">
  <div
    class="min-w-screen h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden"
  >
    <div class="w-full lg:w-5/6">
      <div class="bg-white shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr
              class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
            >
              {#each Object.keys(tableData[0]) as columnHeading}
                <th>{columnHeading}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Object.values(tableData) as row}
              <tr>
                {#each Object.values(row) as cell}
                  <td>{cell}</td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
