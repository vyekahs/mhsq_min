<!-- Funnel.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { ComponentType } from "svelte";
  import Transition from "../Transition/Transition.svelte";

  export let qs: string = "funnel-step"; // 쿼리스트링 default: funnel-step
  export let steps: {
    name: number; // params와 같은 name을 보여준다.
    component: ComponentType;
    props?: Record<string, any>;
  }[];

  let currFunnelStepIndex = $page.url.searchParams.get(qs); // funnel-step=value
  let stepIndex = currFunnelStepIndex ? +currFunnelStepIndex : 1; // currFunnelStepIndex가 존재하면 +currFunnelStepIndex, 존재하지 않으면 1

  let currStep:
    | {
        name: number;
        component: ComponentType;
        props?: Record<string, any>;
      }
    | undefined = steps.find((el) => el.name === +stepIndex);

  let onNext: VoidFunction;

  $: {
    currFunnelStepIndex = $page.url.searchParams.get(qs);
    stepIndex = currFunnelStepIndex ? +currFunnelStepIndex : 1;

    currStep = steps.find((el) => el.name === +stepIndex);

    onNext = () => {
      if (!currStep) {
        return;
      }

      const nextStepIndex = steps.indexOf(currStep) + 2;

      if (nextStepIndex > steps.length) {
        return;
      }

      goto(`?${qs}=${nextStepIndex}`);
    };
  }
</script>

<div>
  {#if currStep}
    {#key currStep}
      <Transition>
        <svelte:component
          this={currStep.component}
          {...currStep.props}
          {onNext}
        />
      </Transition>
    {/key}
  {/if}
</div>

<style scoped>
  div {
    width: 100%;
    height: 100%;
  }
</style>
