<script lang="ts">
  import { goto } from "$app/navigation";

  export let qs: string = "funnel-step";
  export let 현재_질문_인덱스: number = 0;

  const 이전_질문으로_이동 = ({
    현재_질문_인덱스,
  }: {
    현재_질문_인덱스: number;
  }) => {
    if (현재_질문_인덱스 > 1) {
      goto(`?${qs}=${현재_질문_인덱스 - 1}`);
    }
  };
</script>

<header>
  <button on:click={() => 이전_질문으로_이동({ 현재_질문_인덱스 })}>
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
