<script>
  export let tableData;
</script>

<div class="overflow-x-auto">
  <div
    class="min-w-full h-fullbg-gray-100 flex items-center justify-center font-sans"
  >
    <div class="w-4/5 lg:w-5/6">
      <div class="bg-white shadow-md rounded my-6">
        <table class="w-full table-auto bg-gray-200">
          <thead>
            <tr class="text-left border-b-2 border-gray-300 uppercase">
              {#each Object.keys(tableData[0]) as columnHeading}
                <th class="px-4 py-3">{columnHeading}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each Object.values(tableData) as row}
              <tr class="bg-gray-100 border-b border-gray-200">
                {#each Object.values(row) as cell}
                  <td class="px-4 py-3 break-words"
                    >{cell === null ? "" : cell}</td
                  >
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
