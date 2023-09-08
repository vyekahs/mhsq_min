<script rang="ts">
  import { goto } from "$app/navigation";
  import { answer } from "../store/answer_data";
  // @ts-ignore
  console.log(goto);
  let selectedAnswers = {};
  answer.subscribe((data) => {
    console.log(data);
    selectedAnswers = data;
  });
</script>

<div>
  <p>검사 결과</p>
  <p>검사 결과는 여기에서 확인하실 수 있습니다.</p>
  <p>{selectedAnswers}</p>
</div>
