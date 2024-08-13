<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="bg-indigo-900 h-screen content-center text-center w-screen text-white">
  <h1 class="text-4xl">{$page.status} {$page.error.message}</h1>
  <span class="text-2xl"></span>
</div>
