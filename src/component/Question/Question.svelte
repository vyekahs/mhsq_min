<script lang="ts">
  export let question: string;
  export let answers: string[];
</script>

<div class="question">
  <div class="title">{question}</div>
  <div class="flex">
    {#each answers as answer}
      <button class="selectButton">
        {answer}
      </button>
    {/each}
  </div>
</div>

<style scoped>
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
