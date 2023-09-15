<script>
  import BottomDiscription from "../../component/bottom_discription/bottom_discription.svelte";
  import { answer } from "../store/answer_data";
  import { calculate } from "./schema_calculate";
  import { createComment } from "./schema_comment";
  // @ts-ignore
  /**
   * @type {number[]}
   */
  let selectedAnswers = [];
  answer.subscribe((data) => {
    selectedAnswers = data;
  });
  const aa = [5,5,5,5,6,3,4,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6]
  const aaa = calculate(aa);
  const comment = createComment(aaa);

  // const bb = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  // const bbb = symptomsCalculate(bb, 'male');
  // const comment2 = cutoff(bbb);
</script>
<body>
  <header>
    <p>마음연구소</p>
    <p>네 마음의 구조를 알려주맛!</p>
  </header>
<section class="aa">
  <section>
  <div class="link">
    <button> 카카오</button>
    <button> 페이스북</button>
  </div>
  <h4>'내가 제일 중요해'의</h4>
  <h2>특권의식/웅대성 유형</h2>
  <div class="main">
    <p>
      남들보다 내가 더 똑똑하고, 노력하고 있으니 다르게 대우 받아야 하고, 정해진 규칙 등에 대해서 일부 예외가 될 수 있다는 생각을 많이 해요. 그리고 이러한 대우를 차지하기 위해 경쟁도 마다하지 않죠.
    </p>
  </div>
  <div class="other">
    내가 제일 중요해(손상된 한계)
    내가 남들보다 더 우선 시 되어야 하고, 나의 욕구를 그때그때 표출하는 것이 중요한 성향이에요. 남들과 협력해야 하는 상황에 자신의 개인적인 사정을 조금 더 중요시 여긴다거나, 단체 내에서 자신이 일부 희생해야 하거나 불편함을 감수해야 하는 상황에 대해 즉각적인 불만을 표출하는 경우도 생겨요.
    원인: 어린 시절 목표 설정과 협동, 그리고 이에 대한 인내와 책임을 배울 수 있는 환경이 충분히 주어지지 못했을 수 있어요.
    {#each comment as c}
    <br />
    comment: {c}
    {/each}
  </div>
  <div class="reply">
    <button> 다시 해보기</button>
  </div>
 <BottomDiscription />
</section>
</section>
</body>
<style>
  * {
  margin: 0;
  padding: 0;
 
  }
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 20px;
  background-color: #FBBD61;
  
}
.aa {
  background-color: #FBBD61;
  border-radius: 0px 0px 0px 0px;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #F9F9F9;
  border-radius: 60px 0px 0px 0px;
}
.link {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  padding: 20px;
}
.link button {
  box-shadow: 0px 4px 4px 0px #0000001A;
  border: 0;
  border-radius: 50%;
  background-color: #fff;
  width: 45px;
  height: 45px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}
.other {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
}
.reply {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px;
  
}
.reply button {
  border: 2px solid #FBBD61;
  background-color: #FfFfFf;
  border-radius: 50px;
  width: 263px;
  height: 50px;
  box-shadow: 0px 4px 4px 0px #0000001A;

}

</style>