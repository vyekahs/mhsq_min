<!-- Funnel.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import Transition from "../Transition/Transition.svelte";

  export let qs: string;
  export let steps: { name: string; children: any }[];

  const params = $page.url.search;
  console.log(params);

  const stepStore = writable<{ name: string; children: any } | null>(null);
  let currStep: { name: string; children: any } = steps[0];

  const onNext = () => {
    if (!currStep) {
      return;
    }

    const nextIndex = steps.indexOf(currStep) + 1;

    if (nextIndex >= steps.length) {
      return;
    }

    const nextStep = steps[nextIndex];
    stepStore.set(nextStep);
    goto(`?${qs}=${nextStep.name}`);
  };

  setContext("currStep", stepStore);

  $: {
    if ($stepStore) {
      currStep = $stepStore;
    }
  }
</script>

<div>
  {#key $page.url.search}
    <Transition>
      <svelte:component this={currStep.children} />
    </Transition>
  {/key}
  <button on:click={onNext}>다음</button>
</div>
