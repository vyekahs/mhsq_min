<script>
  import { page } from "$app/stores";
  import Header from "../../component/Survey/Header.svelte";
  import BottomDiscription from "../../component/bottom_discription/bottom_discription.svelte";
  import { answer } from "../store/answer_data";
  import { calculate } from "./schema_calculate";
  import { createComment } from "./schema_comment";
  // @ts-ignore
  /**
   * @type {import('../survey/type').AnswerType[]}
   */
  let selectedAnswers = $answer;
  const aa = [
    5, 5, 5, 5, 6, 3, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  ];
  const aaa = calculate(aa);
  const comments = createComment(aaa);

  // const bb = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  // const bbb = symptomsCalculate(bb, 'male');
  // const comment2 = cutoff(bbb);

  const copyClipboard = async () => {
    await window.navigator.clipboard.writeText($page.url.href);
  };
</script>

<section>
  <div class="padding_box">
    <Header />
  </div>
  <main>
    <div class="links">
      <button>
        <img src="share_kakao.svg" alt="share_kakao" />
      </button>
      <button on:click={copyClipboard}>
        <img src="share_link.svg" alt="share_link" />
      </button>
    </div>
    <div class="result_wrapper">
      <div class="result">
        <div class="titles">
          <h4 class="intro_title">'내가 제일 중요해'의</h4>
          <h2 class="title">특권의식/웅대성 유형</h2>
        </div>
        <div class="summary">
          <span
            >남들보다 내가 더 똑똑하고, 노력하고 있으니 다르게 대우 받아야 하고,
            정해진 규칙 등에 대해서 일부 예외가 될 수 있다는 생각을 많이 해요.
            그리고 이러한 대우를 차지하기 위해 경쟁도 마다하지 않죠.</span
          >
        </div>
        <div class="other">
          <span class="total">내가 제일 중요해(손상된 한계)</span>
          <span class="disposition"
            >내가 남들보다 더 우선 시 되어야 하고, 나의 욕구를 그때그때 표출하는
            것이 중요한 성향이에요. 남들과 협력해야 하는 상황에 자신의 개인적인
            사정을 조금 더 중요시 여긴다거나, 단체 내에서 자신이 일부 희생해야
            하거나 불편함을 감수해야 하는 상황에 대해 즉각적인 불만을 표출하는
            경우도 생겨요.</span
          >
          <span class="cause">
            원인: 어린 시절 목표 설정과 협동, 그리고 이에 대한 인내와 책임을
            배울 수 있는 환경이 충분히 주어지지 못했을 수 있어요.
          </span>
          {#each comments as c}
            <span>코맨트: {c}</span>
          {/each}
        </div>
      </div>
      <div class="retry_button">
        <button>다시 해보기</button>
      </div>
      <BottomDiscription />
    </div>
  </main>
</section>
<div class="bottom" />

<style scoped>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.56rem;
    background-color: #fbbd61;
  }

  .padding_box {
    width: 100%;
    padding: 1.87rem 1.7rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }

  main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.62rem;
    border-top-left-radius: 60px;
    background: #f9f9f9;
    padding: 1.75rem 1.25rem;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.94rem;
  }

  .links > button {
    width: 2.8125rem;
    height: 2.8125rem;
    background-color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .result_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.94rem;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.38rem;
    background-color: transparent;
  }

  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    color: #4a4141;
    font-family: THEFACESHOP INKLIPQUID;
  }

  .intro_title {
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .title {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary {
    background-color: white;
    padding: 2.3rem 1.1rem;
    border-radius: 1.25rem;
  }

  .summary > span {
    color: #4a4141;
    font-family: "Noto-Sans-Light";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem; /* 166.667% */
  }

  .other {
    display: flex;
    flex-direction: column;
    gap: 1.38rem;
    padding: 0 1rem;
  }

  .other > span {
    color: #4a4141;
    font-family: "Noto-Sans-Light";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem; /* 166.667% */
  }

  .retry_button {
    width: 90%;
    max-width: 20rem;
  }

  .retry_button > button {
    padding: 0.87rem 0;
    width: 100%;
    border: 2px solid #fbbd61;
    border-radius: 1.875rem;
    background-color: white;
    color: #4a4141;
    text-align: center;
    font-family: "Noto-Sans-Light";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    width: 100%;
    height: 10px;
    background-color: #fbbd61;
  }
</style>
