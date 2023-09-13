<script>
  import { goto } from "$app/navigation";
  import { answer } from "../store/answer_data";
  import { calculate } from "./schema_calculate";
  import { createComment } from "./schema_comment";
  import { symptomsCalculate } from "./symptoms_calculate";
  import { cutoff } from "./symptoms_comment";
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

  const bb = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  const bbb = symptomsCalculate(bb, 'male');
  const comment2 = cutoff(bbb);
</script>

<div>
  <p>검사 결과</p>
  {#each comment as c}
  <p>{c}</p>
  {/each}
  <p>검사 결과</p>
  {#each comment2 as c}
  <p>{c[0]+": "+c[1]}</p>
  {/each}
</div>
