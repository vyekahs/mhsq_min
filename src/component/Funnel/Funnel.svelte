<!-- Funnel.svelte -->
<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Transition from "../Transition/Transition.svelte";
  import type { StepType } from "../../routes/survey/type";

  export let qs: string = "funnel-step"; // 쿼리스트링 default: funnel-step
  export let steps: StepType[] = [];

  $: 현재_퍼널_스텝 = $page.url.searchParams.get(qs); // 1 ~ steps.length
  $: 보여줄_퍼널_페이지 = 현재_퍼널_스텝 ? +현재_퍼널_스텝 : 1; // 0 ~ (steps.length - 1)

  $: 보여줄_퍼널 = steps[보여줄_퍼널_페이지 - 1];

  const 다음페이지로_이동 = ({
    보여줄_퍼널_페이지,
  }: {
    보여줄_퍼널_페이지: number;
  }) => {
    const max_length = steps.length;
    if (보여줄_퍼널_페이지 < max_length) {
      goto(`?${qs}=${보여줄_퍼널_페이지 + 1}`);
      return;
    }
    goto("result");
  };
</script>

<div>
  {#key 보여줄_퍼널.name}
    <Transition>
      <svelte:component
        this={보여줄_퍼널.component}
        {...보여줄_퍼널.props}
        onNext={() => 다음페이지로_이동({ 보여줄_퍼널_페이지 })}
      />
    </Transition>
  {/key}
</div>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
  }
</style>
