<script lang="ts">
  export let question: string;
  export let answers: string[];
  export let onNext: () => void;
  export let selectAnswer: (answer: any) => void;
</script>

<div class="question">
  <div class="title">{question}</div>
  <div class="flex">
    {#each answers as answer}
      <button
        class="selectButton"
        on:click={() => {
          selectAnswer(answer);
          onNext();
        }}
      >
        {answer}
      </button>
    {/each}
  </div>
</div>

<style scoped>
  .question {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .flex {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    width: 100%;
    padding: 12px 0;
    background-color: #ffa500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    border: none;
  }

  .title {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-line;
    word-break: keep-all;
  }

  /* .question {
    width: 100%;
    max-width: 330px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .title {
    width: 100%;
    max-width: 330px;
    height: 100px;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-line;
    word-break: keep-all;
  }

  .selectButton {
    width: 100%;
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
  } */
</style>
