<script>
  export let data;
  console.log(data);
</script>

<div class="bg-slate-800 text-neutral-300 w-screen">
  <h1
    class="content-center text-center text-6xl font-mono h-64 bg-gradient-to-r from-indigo-600 to-purple-700"
  >
    Data from db:
  </h1>
  <div class="flex justify-center">
    <ol class="divide-y-4 divide-slate-400/10">
      {#each data.dataTest as person}
        <div
          class="p-8 hover:text-neutral-100 transition duration-500 w-screen active:bg-slate-900/50 hover:bg-violet-900/10"
        >
          <a href="/{person.id}">
            <li class="flex flex-row">
              <div class="basis-1/4">First name: {person.firstName}</div>
              <div class="basis-1/4">Last name: {person.lastName}</div>
              <div class="basis-1/4">Age: {person.age}</div>
              <div class="basis-1/4">Pet: {person.pet}</div>
            </li>
          </a>
        </div>
      {/each}
    </ol>
  </div>
</div>
