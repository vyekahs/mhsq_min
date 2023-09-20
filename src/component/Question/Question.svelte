<script lang="ts">
  import type { AnswerType } from "../../routes/survey/type";

  export let index: number;
  export let question: string;
  export let answers: AnswerType[];
  export let onNext: () => void;
  export let selectAnswer: ({
    index,
    answer,
  }: {
    index: number;
    answer: AnswerType;
  }) => void;
</script>

<div class="question">
  <div class="title">
    <span>{index}. {question}</span>
  </div>
  <div class="flex">
    {#each answers as answer}
      <button
        class="selectButton"
        on:click={() => {
          selectAnswer({ index: index - 1, answer });
          onNext();
        }}
      >
        {answer.answer}
      </button>
    {/each}
  </div>
  <div style="height: 10px" />
</div>

<style scoped>
  .question {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 100%;
    padding: 0 1.4rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title > span {
    color: #4a4141;
    font-family: "THEFACESHOP INKLIPQUID";
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #4a4141;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-line;
    word-break: keep-all;
  }

  .flex {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-top-left-radius: 60px;
    background: #f9f9f9;
    padding: 2rem 3.15rem 1rem;
  }

  button {
    width: 100%;
    padding: 14px 0;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    color: #4a4141;
    text-align: center;
    font-family: "Noto-Sans-Light";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: background-color 0.3s;
  }
</style>
