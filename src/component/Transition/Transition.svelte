<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { fly, type TransitionConfig } from "svelte/transition";

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
        return `position: absolute; transform: translateX(${offset * u}px);`;
      },
    };
  }

  export function fadeOut(node: Element): TransitionConfig {
    const offset = window.innerWidth;

    if ($disabled) {
      return {
        duration: 0,
        css: () => `opacity: 0;  top:0; left:0; width:100%; z-index: -1;`,
      };
    }
    return {
      duration: $disabled ? 0 : 400,
      css: (t: number, u: number) =>
        `position: absolute;
        transform: translateX(${-offset * u}px);
        left:0; z-index: -1;
        `,
    };
  }
</script>

<div out:fly={{ x: -400 }} in:fly={{ x: 400 }} class="container">
  <slot />
</div>

<style scoped>
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
</style>
