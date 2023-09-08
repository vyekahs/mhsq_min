<div class="main">
  <h1>검사 시작</h1>
  <p>검사를 시작하시겠습니까?</p>
  <p>검사는 약 10분 정도 소요됩니다.</p>

  <a href="/survey" class="start-button">검사 시작하기</a>
  <p>검사 결과는 <a href="/result">여기</a>에서 확인하실 수 있습니다.</p>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .start-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
  }

  .start-button:hover {
    background-color: #0056b3;
  }
</style>
