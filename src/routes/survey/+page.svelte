<script lang="ts">
  import { goto } from "$app/navigation";
  import { questions } from "./question";
  import { answer } from "../store/answer_data";
  import { slide } from "svelte/transition";
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
      {#each questions as q, idx}
        {#if idx === currentIdx && !completed}
          <div class="question"
          transition:slide="{{ duration: 300, delay: 0, easing: e => e , axis: 'x'}}"
          >
            <div class="title">{q.question}</div>
            <div class="flex">
              {#each q.answers as answer}
                <button
                  class="selectButton"
                  on:click={() => selectAnswer(answer.score)}>{answer.answer}</button
                >
              {/each}
            </div>
          </div>
        {/if}
      {/each}
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

  .title {
    height: 200px;
    width: 300px;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-line;
    word-break: keep-all;
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
