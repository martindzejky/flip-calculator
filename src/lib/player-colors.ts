/**
 * Literal Tailwind class strings for each player color.
 *
 * These MUST be written as complete literal strings (no concatenation) so the
 * Tailwind scanner can see and generate them. Order matches `PLAYER_COLORS` in
 * `state/game.svelte.ts` (assigned round-robin by join order).
 */
export type PlayerColorClasses = {
  /** Solid fill (color dot, accent band). */
  bg: string;
  /** Soft tinted fill (card wash). */
  soft: string;
  /** Foreground text in the player color. */
  text: string;
  /** Ring used to highlight a card. */
  ring: string;
  /** Border in the player color. */
  border: string;
};

export const PLAYER_COLOR_CLASSES: PlayerColorClasses[] = [
  {
    bg: 'bg-p-teal',
    soft: 'bg-p-teal/12',
    text: 'text-p-teal',
    ring: 'ring-p-teal',
    border: 'border-p-teal',
  },
  {
    bg: 'bg-p-coral',
    soft: 'bg-p-coral/12',
    text: 'text-p-coral',
    ring: 'ring-p-coral',
    border: 'border-p-coral',
  },
  {
    bg: 'bg-p-gold',
    soft: 'bg-p-gold/15',
    text: 'text-p-gold',
    ring: 'ring-p-gold',
    border: 'border-p-gold',
  },
  {
    bg: 'bg-p-magenta',
    soft: 'bg-p-magenta/12',
    text: 'text-p-magenta',
    ring: 'ring-p-magenta',
    border: 'border-p-magenta',
  },
  {
    bg: 'bg-p-lime',
    soft: 'bg-p-lime/15',
    text: 'text-p-lime',
    ring: 'ring-p-lime',
    border: 'border-p-lime',
  },
  {
    bg: 'bg-p-plum',
    soft: 'bg-p-plum/12',
    text: 'text-p-plum',
    ring: 'ring-p-plum',
    border: 'border-p-plum',
  },
  {
    bg: 'bg-p-blue',
    soft: 'bg-p-blue/12',
    text: 'text-p-blue',
    ring: 'ring-p-blue',
    border: 'border-p-blue',
  },
  {
    bg: 'bg-p-orange',
    soft: 'bg-p-orange/12',
    text: 'text-p-orange',
    ring: 'ring-p-orange',
    border: 'border-p-orange',
  },
  {
    bg: 'bg-p-green',
    soft: 'bg-p-green/12',
    text: 'text-p-green',
    ring: 'ring-p-green',
    border: 'border-p-green',
  },
  {
    bg: 'bg-p-peach',
    soft: 'bg-p-peach/15',
    text: 'text-p-peach',
    ring: 'ring-p-peach',
    border: 'border-p-peach',
  },
  {
    bg: 'bg-p-red',
    soft: 'bg-p-red/12',
    text: 'text-p-red',
    ring: 'ring-p-red',
    border: 'border-p-red',
  },
  {
    bg: 'bg-p-fuchsia',
    soft: 'bg-p-fuchsia/12',
    text: 'text-p-fuchsia',
    ring: 'ring-p-fuchsia',
    border: 'border-p-fuchsia',
  },
];

export function colorClasses(index: number): PlayerColorClasses {
  return PLAYER_COLOR_CLASSES[index % PLAYER_COLOR_CLASSES.length];
}
