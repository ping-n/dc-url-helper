<script>
  import { currentYear, fullName } from "$lib/utils/constant";
</script>

<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center flex-col">
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
      © {currentYear}
      {fullName}
    </p>
  </div>
</footer>
