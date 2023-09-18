<script>
  import BottomDiscription from "../component/bottom_discription/bottom_discription.svelte";
  import src from "$lib/assets/mask_group.svg";
</script>

<body class="main">
  <header>
    <div>
      <h4>마음연구소</h4>
      <h2>네 마음의 구조를 알려주맛!</h2>
    </div>
  </header>
  <section class="aa">
    <section class="bb">
      <img {src} alt="landing" />
      <div class="group">
        <a href="/survey" class="start-button">시작하기</a>
        <BottomDiscription />
        <a href="/survey" class="company">마음연구소는?</a>
      </div>
    </section>
  </section>
</body>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    background-color: #fbbd61;
  }
  header div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10%;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    border-radius: 60px 0px 0px 0px;
  }
  .aa {
    background-color: #fbbd61;
    border-radius: 0px 0px 0px 0px;
  }
  .bb {
    margin-bottom: 10px;
    padding: 20px 0;
  }
  .bb img {
    width: 80%;
    margin: 10px 0;
  }
  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .start-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbbd61;
    border-radius: 30px;
    color: black;
    text-decoration: none;
    width: 274px;
    height: 60px;
    box-shadow: 0px 4px 4px 0px #0000001a;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
  }
  .company {
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    width: 132px;
    height: 38px;
    border-radius: 30px;
    border: 2px solid #fbbd61;
    color: #4a4141;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
</style>
