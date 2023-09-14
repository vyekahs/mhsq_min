<script lang="ts">
  import { goto } from "$app/navigation";

  export let qs: string = "funnel-step";
  export let currentStepIndex: number = 0; // 현재 질문 index

  const onClickPrev = () => {
    if (currentStepIndex > 1) {
      currentStepIndex -= 1;
      goto(`?${qs}=${currentStepIndex}`);
    }
  };
</script>

<header>
  <button on:click={onClickPrev}>
    <img src="arrow-left.svg" alt="arrow" />
  </button>
  <div>
    <span class="foundation">마음연구소</span>
    <span class="title">니 마음의 구조를 알려주맛!</span>
  </div>
</header>

<style scoped>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  img {
    cursor: pointer;
  }

  .foundation {
    color: #3d3030;
    font-family: "THEFACESHOP INKLIPQUID";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .title {
    color: #3d3030;
    font-family: "THEFACESHOP INKLIPQUID";
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
</style>
