<script lang="ts">
  import { hydrate } from '$lib/state/game.svelte';

  const { children } = $props();

  // ssr=false means this only ever runs in the browser; hydrate before first
  // paint so saved games show immediately with no empty-state flash.
  hydrate();
</script>

{@render children()}
