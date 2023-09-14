<script lang="ts">
  export let answerCount: number = 0; // 대답한 질문 개수
  export let allStepIndex: number = 0; // 전체 질문 개수
</script>

<div class="container">
  <div class="progressbar">
    <div
      class="progress"
      style="width: {(answerCount / allStepIndex) * 100}%;"
    />
  </div>
  <span class="present">
    {answerCount} / {allStepIndex}
  </span>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.56rem;
  }

  .progressbar {
    height: 0.625rem;
    background-color: white;
    border-radius: 1.25rem;
  }

  .present {
    text-align: end;
    color: #4a4141;
    font-family: "THEFACESHOP INKLIPQUID";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .progress {
    height: 100%;
    border-radius: 1.25rem;
    background: #d0881e;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  }
</style>
