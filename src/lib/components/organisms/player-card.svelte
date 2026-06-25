<script lang="ts">
  import ScoreChip from '$lib/components/molecules/score-chip.svelte';
  import { colorClasses } from '$lib/player-colors';
  import { total, type Player } from '$lib/state/game.svelte';
  import { Crown, Plus } from '@lucide/svelte';

  type Props = {
    player: Player;
    isLeader: boolean;
    onAdd: () => void;
    onEditEntry: (index: number) => void;
  };

  let { player, isLeader, onAdd, onEditEntry }: Props = $props();

  const color = $derived(colorClasses(player.colorIndex));
  const sum = $derived(total(player));
</script>

<article
  class={[
    'rounded-3xl border bg-surface p-4 shadow-sm transition',
    isLeader
      ? ['border-gold ring-4 ring-gold/50', color.soft]
      : 'border-border',
  ]}
>
  <div class="flex items-center gap-3">
    <span class={['size-7 shrink-0 rounded-full', color.bg]} aria-hidden="true"
    ></span>

    <h2 class="min-w-0 flex-1 truncate text-xl font-semibold">{player.name}</h2>

    {#if isLeader}
      <span
        class="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-sm font-semibold text-foreground"
      >
        <Crown size={16} aria-hidden="true" />
        Lead
      </span>
    {/if}
  </div>

  <div class="mt-1 flex items-end justify-between gap-3">
    <div class="flex items-baseline gap-2">
      <span class="font-heading text-5xl font-bold tabular-nums">{sum}</span>
      <span class="text-sm text-muted">
        {player.scores.length}
        {player.scores.length === 1 ? 'round' : 'rounds'}
      </span>
    </div>

    <button
      type="button"
      onclick={onAdd}
      aria-label={`Add a round score for ${player.name}`}
      class={[
        'text-white inline-flex min-h-12 items-center gap-1.5 rounded-2xl px-4 font-heading font-semibold shadow-sm',
        'touch-manipulation transition select-none motion-safe:active:scale-95',
        color.bg,
      ]}
    >
      <Plus size={20} aria-hidden="true" />
      Score
    </button>
  </div>

  {#if player.scores.length > 0}
    <div class="mt-3 flex flex-wrap gap-1.5">
      {#each player.scores as score, i (i)}
        <ScoreChip value={score} round={i + 1} onclick={() => onEditEntry(i)} />
      {/each}
    </div>
  {/if}
</article>
