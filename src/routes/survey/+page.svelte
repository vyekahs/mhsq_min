<script lang="ts">
  import { questions } from "./question";
  import { answer } from "../store/answer_data";
  import Funnel from "../../component/Funnel/Funnel.svelte";
  import Question from "../../component/Question/Question.svelte";
  import { page } from "$app/stores";
  import Header from "../../component/Survey/Header.svelte";
  import Progress from "../../component/Survey/Progress.svelte";
  import type { StepType } from "./type";
  import { onMount } from "svelte";

  let qs = "funnel-step";
  $: initIndex = $page.url.searchParams.get(qs);
  $: currentStepIndex = initIndex ? +initIndex : 1; // funnel-step이 없으면 1, 있으면 value

  let completed = false;

  const Steps: StepType[] = questions.map((question) => ({
    name: question.index,
    component: Question,
    props: {
      index: question.index,
      question: question.question,
      answers: question.answers,
      selectAnswer: answer.add,
    },
  }));

  onMount(() => {
    sessionStorage.clear();
    console.log($answer);
  });
</script>

<div class="section">
  <div class="padding_box">
    <Header bind:현재_질문_인덱스={currentStepIndex} />
    <Progress
      bind:대답한_질문_개수={$answer.length}
      bind:전체_질문_개수={Steps.length}
    />
  </div>
  <div class="row">
    <Funnel bind:qs steps={Steps} />
    {#if completed}
      <div class="question">
        <span>검사가 완료되었습니다.</span>
        <div class="flex">
          <button class="selectButton"> 결과 확인하기 </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style scoped>
  .section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fbbd61;
  }

  .padding_box {
    width: 100%;
    padding: 1.87rem 1.7rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  .row {
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .question {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .selectButton {
    width: 330px;
    padding: 10px 20px;
    background-color: #000;
    color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  .selectButton:hover {
    background-color: #ccc;
    color: black;
  }

  .flex {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
</style>
