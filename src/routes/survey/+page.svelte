<script lang="ts">
  import { goto } from "$app/navigation";
  import { questions } from "./question";
  import { answer } from "../store/answer_data";
  import { slide } from "svelte/transition";
  import Funnel from "../../component/Funnel/Funnel.svelte";
  import type { ComponentType } from "svelte";
  import Question from "../../component/Question/Question.svelte";
  let currentIdx = 0;
  let selectedAnswers: number[] = [];
  let completed = false;

  function selectAnswer(answer: any) {
    selectedAnswers[currentIdx] = answer;
    nextQuestion();
  }

  function nextQuestion() {
    if (currentIdx <= questions.length - 1) currentIdx++;
    if (
      selectedAnswers[questions.length - 1] &&
      currentIdx >= questions.length
    ) {
      completed = true;
    }
  }

  function prevQuestion() {
    if (currentIdx > 0) currentIdx--;
    completed = false;
  }

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
      ...question,
    },
  }));
</script>

<section>
  <div class="section">
    <header>
      <button class="circle-button" on:click={prevQuestion}>
        <svg class="arrow-icon" width="10" height="10" viewBox="0 0 24 24">
          <path
            stroke="#fff"
            stroke-width="2"
            fill="none"
            d="M16 20l-8-8 8-8"
          />
        </svg>
      </button>
      <div class="progress-bar">
        <div
          class="progress"
          style="width: {(currentIdx / questions.length) * 100}%;"
        />
      </div>
    </header>
    <div class="row">
      <Funnel steps={Steps} />
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
</section>

<style>
  section {
    width: 100%; /* 또는 원하는 크기 */
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-width: 330px;
  }
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 330px;
    max-width: 630px;
  }
  .circle-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
  }

  .arrow-icon {
    font-weight: bold;
    font-size: 10px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
  .progress-bar {
    width: 100%;
    background-color: #ccc;
    height: 15px;
    border-radius: 10px;
  }

  .progress {
    background-color: #000;
    height: 100%;
    border-radius: 5px;
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
