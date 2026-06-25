<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Props = {
    /** Required for accessibility — describes the action. */
    label: string;
    children: Snippet;
  } & HTMLButtonAttributes;

  let { label, children, class: className, ...rest }: Props = $props();
</script>

<button
  type="button"
  aria-label={label}
  title={label}
  class={[
    'inline-flex size-12 items-center justify-center rounded-xl',
    'touch-manipulation transition select-none',
    'hover:bg-surface-sunken focus-visible:bg-surface-sunken',
    'motion-safe:active:scale-90',
    'disabled:pointer-events-none disabled:opacity-40',
    className,
  ]}
  {...rest}
>
  {@render children()}
</button>
