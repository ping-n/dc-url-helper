<script>
  import { supabase } from "$lib/data/db";

  let loading = false;
  let email;

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      loading = false;
    }
  };
</script>

<section class="container">
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 sm:mx-32 mx-12 mb-4 flex flex-col"
    on:submit|preventDefault={handleLogin}
  >
    <h1 class="text-4xl mb-5">Supabase + Svelte</h1>
    <p class="text-xl mb-5">Sign in via magic link with your email below</p>

    <div class="relative mb-4">
      <input
        id="email"
        name="email"
        type="text"
        class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
        placeholder="john@doe.com"
        bind:value={email}
      />
      <label
        for="email"
        class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >Email address</label
      >
    </div>
    <div class="flex items-center justify-between">
      <input
        type="submit"
        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        value={loading ? "Loading" : "Send magic link"}
        disabled={loading}
      />
    </div>
  </form>
</section>
