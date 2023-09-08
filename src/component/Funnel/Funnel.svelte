<!-- Funnel.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let qs: string;
  export let steps: string[];

  const stepStore = writable<string | null>(null);
  let step: string | null;

  const onNext = () => {
    if (!step) {
      return;
    }

    const nextIndex = steps.indexOf(step) + 1;

    if (nextIndex >= steps.length) {
      return;
    }

    const nextStep = steps[nextIndex];
    stepStore.set(nextStep);
    goto(`?${qs}=${nextStep}`);
  };

  setContext("step", stepStore);

  $: {
    step = $stepStore;
  }
</script>

<div>
  <slot />
</div>

<!-- Funnel.Step 컴포넌트를 사용할 때 슬롯 내부에 해당 스텝이 현재 스텝과 일치하는지 확인합니다. -->
{#if step === name}
  <div>
    <slot />
    <button on:click={onNext}>다음</button>
  </div>
{/if}
