<!-- App.svelte -->
<script lang="ts">
  import 병원선택 from "../../component/Reservation/병원선택.svelte";
  import 사람선택 from "../../component/Reservation/사람선택.svelte";

  import Funnel from "../../component/Funnel/Funnel.svelte";
  import Question from "../../component/Question/Question.svelte";
  import type { ComponentType } from "svelte";
  import { questions } from "../survey/question";

  const Steps: {
    name: number;
    component: ComponentType;
    props?: Record<string, any>;
  }[] = questions.map((question) => ({
    name: question.index,
    component: Question,
    props: {
      ...question,
    },
  }));
</script>

<Funnel steps={Steps} />
