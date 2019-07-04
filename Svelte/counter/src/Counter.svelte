<script>
  let initial_value = 0

  function increment() {
    initial_value += 1
  }

  function decrement() {
    initial_value -= 1
  }
</script>

<style>
  .danger {
    color: red;
    font-size: 48px;
  }
</style>

{#if initial_value > 10}
  <p class="danger">STOP MAN</p>
  <button on:click={ () => initial_value = 0 }>Reset</button>
{:else}
  <h1>{ initial_value }</h1>
  <button on:click={ decrement }>-</button>
  <button on:click={ increment }>+</button>
{/if}
