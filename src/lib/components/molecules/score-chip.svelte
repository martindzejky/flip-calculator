<script lang="ts">
  type Props = {
    value: number;
    round: number;
    onclick?: () => void;
  };

  let { value, round, onclick }: Props = $props();
</script>

<button
  type="button"
  {onclick}
  aria-label={`Round ${round}: ${value} points. Edit.`}
  class={[
    'inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl px-3',
    'bg-surface-sunken text-base font-semibold text-foreground tabular-nums',
    'touch-manipulation border border-border transition select-none',
    'hover:border-primary focus-visible:border-primary motion-safe:active:scale-95',
  ]}
>
  {value}
</button>
