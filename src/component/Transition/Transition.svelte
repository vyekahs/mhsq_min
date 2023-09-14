<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import type { TransitionConfig } from "svelte/transition";

  const disabled = getContext<Writable<boolean>>("transition-disabled");

  export function fadeIn(node: Element): TransitionConfig {
    const offset = window.innerWidth;
    if ($disabled) {
      return {
        duration: 0,
        css: () => ``,
      };
    }
    return {
      duration: 400,
      css: (t: number, u: number) => {
        return `transform: translateX(${offset * u}px);`;
      },
    };
  }

  export function fadeOut(node: Element): TransitionConfig {
    const offset = window.innerWidth;

    if ($disabled) {
      return {
        duration: 0,
        css: () =>
          `opacity: 0; position:absolute; top:0; left:0; width:100%; z-index: -1;`,
      };
    }
    return {
      duration: $disabled ? 0 : 400,
      css: (t: number, u: number) =>
        `transform: translateX(${
          -offset * u
        }px); position:absolute;  left:0; z-index: -1;`,
    };
  }
</script>

<div in:fadeIn out:fadeOut>
  <slot />
</div>
