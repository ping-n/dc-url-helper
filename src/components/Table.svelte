<script>
  import { HEADERS } from "../data/Main";
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
              {#each HEADERS as header}
                <th>{header}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{id}</th>
              <td>{name}</td>
              <td>{urlPath}</td>
              <td>{note}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
