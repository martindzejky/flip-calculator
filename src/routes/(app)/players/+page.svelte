<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/atoms/button.svelte';
  import PlayerNameRow from '$lib/components/molecules/player-name-row.svelte';
  import StepHeader from '$lib/components/molecules/step-header.svelte';
  import {
    addPlayer,
    game,
    movePlayer,
    removePlayer,
    renamePlayer,
  } from '$lib/state/game.svelte';
  import { UserPlus, Users } from '@lucide/svelte';

  let lastAddedId = $state<string | null>(null);

  function add() {
    const player = addPlayer();
    lastAddedId = player.id;
  }

  function addFour() {
    while (game.players.length < 4) addPlayer();
    lastAddedId = null;
  }

  function play() {
    if (game.players.length === 0) return;
    goto('/play');
  }
</script>

<svelte:head>
  <title>Players — Flip Tally</title>
</svelte:head>

<StepHeader title="Players" backHref="/" backLabel="Home" />

<div
  class="mx-auto w-full max-w-app flex-1 px-4 pt-4 pb-40"
  style="padding-top: 1rem;"
>
  {#if game.players.length === 0}
    <div
      class="mt-6 flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-border bg-surface/60 px-6 py-12 text-center"
    >
      <span
        class="inline-flex size-16 items-center justify-center rounded-full bg-primary/12 text-primary"
      >
        <Users size={32} aria-hidden="true" />
      </span>
      <div>
        <p class="font-heading text-xl font-semibold">No players yet</p>
        <p class="mt-1 text-muted">
          Add the people at your table to get started.
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <Button onclick={add} size="lg">
          <UserPlus size={20} aria-hidden="true" />
          Add player
        </Button>
        <Button onclick={addFour} variant="ghost">Add 4 players</Button>
      </div>
    </div>
  {:else}
    <ul class="flex flex-col gap-2">
      {#each game.players as player, i (player.id)}
        <PlayerNameRow
          {player}
          isFirst={i === 0}
          isLast={i === game.players.length - 1}
          autofocus={player.id === lastAddedId}
          onRename={(name) => renamePlayer(player.id, name)}
          onMove={(dir) => movePlayer(player.id, dir)}
          onRemove={() => removePlayer(player.id)}
        />
      {/each}
    </ul>

    <button
      type="button"
      onclick={add}
      class="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border font-heading font-semibold text-muted transition select-none hover:border-primary hover:text-primary focus-visible:border-primary motion-safe:active:scale-95"
    >
      <UserPlus size={20} aria-hidden="true" />
      Add player
    </button>
  {/if}
</div>

<!-- Sticky play bar -->
<div
  class="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-background/95 backdrop-blur"
  style="padding-bottom: env(safe-area-inset-bottom);"
>
  <div class="mx-auto w-full max-w-app px-4 py-3">
    {#if game.players.length === 1}
      <p class="mb-2 text-center text-sm text-muted">
        Add at least one more for a real game.
      </p>
    {/if}
    <Button onclick={play} size="lg" block disabled={game.players.length === 0}>
      Play
      {#if game.players.length > 0}
        <span class="tabular-nums">· {game.players.length}</span>
      {/if}
    </Button>
  </div>
</div>
