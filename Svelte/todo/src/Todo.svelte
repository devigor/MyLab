<script>
  let newItem = ''
  let items = []
  try {
    items = JSON.parse(localStorage.getItem('Todos')) || []
  } catch (err) {
    items = []
  }

  function handleRemove(key) {
    items = items.slice(0, key).concat(items.slice(key + 1))
    localStorage.setItem('Todos', JSON.stringify(items))
  }

  function handleAdd(event) {
    if (event.key == 'Enter') {
      const newTodo = event.target.value
      items = items.concat(newTodo)
      newItem = ''
      localStorage.setItem('Todos', JSON.stringify(items))
    }
  }

</script>

<style>
</style>

<h1>Todo Svelte</h1>
<input type="text" on:keydown={handleAdd} bind:value={newItem} placeholder="Add new todo">

<ul class="list-group">
  {#each items as item, key}
    <li key={ key } class="list-group-item">
      { item }
      <span on:click={ () => handleRemove(key) } class="btn btn-danger">X</span>
    </li>
  {/each}
</ul>