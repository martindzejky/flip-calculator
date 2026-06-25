<script lang="ts">
  import type { Snippet } from 'svelte';
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements';

  type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
  type Size = 'md' | 'lg';

  type Props = {
    variant?: Variant;
    size?: Size;
    href?: string;
    block?: boolean;
    children: Snippet;
  } & HTMLButtonAttributes &
    HTMLAnchorAttributes;

  let {
    variant = 'primary',
    size = 'md',
    href,
    block = false,
    children,
    class: className,
    ...rest
  }: Props = $props();

  const base = [
    'inline-flex items-center justify-center gap-2 rounded-2xl font-heading font-semibold',
    'transition select-none touch-manipulation',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'motion-safe:active:scale-95',
    'disabled:pointer-events-none disabled:opacity-50',
  ];

  const sizes: Record<Size, string> = {
    md: 'min-h-12 px-5 text-base',
    lg: 'min-h-14 px-6 text-lg',
  };

  const variants: Record<Variant, string> = {
    primary:
      'bg-primary text-white shadow-sm hover:bg-primary-dark focus-visible:bg-primary-dark active:bg-primary-darker',
    secondary:
      'bg-coral text-white shadow-sm hover:bg-coral-dark focus-visible:bg-coral-dark',
    ghost:
      'bg-transparent text-foreground hover:bg-surface-sunken focus-visible:bg-surface-sunken',
    danger:
      'border-2 border-error/30 bg-surface text-error hover:bg-error/10 focus-visible:bg-error/10',
  };
</script>

{#if href}
  <a
    {href}
    class={[base, sizes[size], variants[variant], block && 'w-full', className]}
    {...rest}
  >
    {@render children()}
  </a>
{:else}
  <button
    class={[base, sizes[size], variants[variant], block && 'w-full', className]}
    {...rest}
  >
    {@render children()}
  </button>
{/if}
