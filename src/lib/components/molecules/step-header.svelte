<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ChevronLeft } from '@lucide/svelte';

  type Props = {
    title: string;
    /** When set, a back chevron links here. */
    backHref?: string;
    backLabel?: string;
    /** Optional content aligned to the right (menu, actions). */
    actions?: Snippet;
  };

  let { title, backHref, backLabel = 'Back', actions }: Props = $props();
</script>

<header
  class="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur"
  style="padding-top: env(safe-area-inset-top);"
>
  <div class="mx-auto flex max-w-app items-center gap-1 px-3 py-2">
    {#if backHref}
      <a
        href={backHref}
        aria-label={backLabel}
        class="inline-flex size-12 items-center justify-center rounded-xl text-foreground transition hover:bg-surface-sunken focus-visible:bg-surface-sunken motion-safe:active:scale-90"
      >
        <ChevronLeft size={26} aria-hidden="true" />
      </a>
    {:else}
      <div class="size-12"></div>
    {/if}

    <h1 class="min-w-0 flex-1 truncate text-center text-xl font-semibold">
      {title}
    </h1>

    <div class="flex min-w-12 items-center justify-end">
      {#if actions}
        {@render actions()}
      {/if}
    </div>
  </div>
</header>
