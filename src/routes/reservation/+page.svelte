<!-- App.svelte -->
<script lang="ts">
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
