<script lang="ts">
  import { goto } from "$app/navigation";
  import { questions } from "./question";
  import { answer } from "../store/answer_data";
  import Funnel from "../../component/Funnel/Funnel.svelte";
  import Question from "../../component/Question/Question.svelte";
  import { page } from "$app/stores";
  import Header from "../../component/Survey/Header.svelte";
  import Progress from "../../component/Survey/Progress.svelte";
  import type { ComponentType } from "svelte";

  let qs = "funnel-step";
  $: initIndex = $page.url.searchParams.get(qs);

  $: currentStepIndex = initIndex ? +initIndex : 1; // funnel-step이 없으면 1, 있으면 value

  let selectedAnswers: Answer[] = [];

  let completed = false;

  const selectAnswer = (answer: Answer) => {
    selectedAnswers[currentStepIndex - 1] = answer;
    nextQuestion();
  };

  const nextQuestion = () => {
    currentStepIndex += 1;
    // if (currentStepIndex <= questions.length - 1) {
    //   currentStepIndex++;
    //   sessionStorage.setItem("currIdx", currentStepIndex.toString());
    // }
    // if (
    //   selectedAnswers[questions.length - 1] &&
    //   currentStepIndex >= questions.length
    // ) {
    //   completed = true;
    // }
  };

  function complete() {
    // selectedAnswers를 결과 페이지로 전달
    answer.set(selectedAnswers);
    goto(`/result`, { state: { selectedAnswers }, replaceState: true });
  }

  const Steps: {
    name: number;
    component: ComponentType;
    props?: Record<string, any>;
  }[] = questions.map((question) => ({
    name: question.index,
    component: Question,
    props: {
      question: question.question,
      answers: question.answers,
      selectAnswer,
    },
  }));
</script>

<div class="section">
  <div class="padding_box">
    <Header bind:currentStepIndex />
    <Progress bind:currentStepIndex bind:allStepIndex={Steps.length} />
  </div>
  <div class="row">
    <Funnel {qs} steps={Steps} />
    {#if completed}
      <div class="question">
        <span>검사가 완료되었습니다.</span>
        <div class="flex">
          <button class="selectButton" on:click={complete}>
            결과 확인하기
          </button>
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
    gap: 1.44rem;
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
