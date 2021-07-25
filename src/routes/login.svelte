<script>
  import { user } from "$lib/stores/data-store";
  import { supabase } from "$lib/data/db";
  import Auth from "$lib/components/Auth.svelte";

  let loading = true;

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });

  async function signOut() {
    try {
      loading = true;
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }
</script>

<div class="container mx-auto">
  {#if $user}
    <h1>Hello</h1>
    <div>
      <button class="text-2xl" on:click={signOut} disabled={loading}>
        Sign Out
      </button>
    </div>
  {:else}
    <Auth />
  {/if}
</div>
