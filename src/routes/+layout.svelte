<div class="container">
  <slot />
</div>

<style scoped>
  .container {
    width: 100%;
    max-width: 576px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    overflow: hidden;
  }
</style>
