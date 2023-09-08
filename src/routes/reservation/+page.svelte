<!-- App.svelte -->
<script lang="ts">
  import Funnel from "../../component/Funnel/Funnel.svelte";
  import 병원선택 from "../../component/Reservation/병원선택.svelte";
  import 사람선택 from "../../component/Reservation/사람선택.svelte";
  import 일정선택 from "../../component/Reservation/일정선택.svelte";

  const Steps = [
    {
      name: "병원선택",
      children: 병원선택,
    },
    {
      name: "사람선택",
      children: 사람선택,
    },
    {
      name: "일정선택",
      children: 일정선택,
    },
  ];
</script>

<Funnel qs="step" steps={Steps} />
