<template>
    <div class="container">

      <NCard class="cards">
          <h1>My To-Do List</h1>

          <div class="add-todo">
              <input type="text" placeholder="Add a new to-do..." v-model="input">
              <NButton @click="handleInput">Add</NButton>
          </div>

          <NCard @click="() => updateToDo(todo.id)" class="card" v-for="todo in todos" :key="todo.id">
              <h4 :class="todo.completed ? 'complete' : null">{{todo.item}}</h4>
              <p @click="() => deleteToDo(todo.id)" class="delete">X</p>
          </NCard>
      </NCard>
      
    </div>
</template>



<script setup lang="ts">

    const input = ref("");

    const {todos, addToDo, updateToDo, deleteToDo} = useToDos();

    const handleInput = () => {
        addToDo(input.value);
        input.value = "";
    }

</script>



<style>

    h1 {
      font-size: 2rem;
      margin: 2rem 0;
    }

    .container {
        padding: 2rem;
        margin: 0 auto;
        max-width: 60%;
    }

    .cards {
        padding: 2rem;
    }

    input {
        outline: none;
        font-size: 1.5rem;
    }

    .add-todo {
        display: flex;
        justify-content: space-between;
    }

    .card {
        padding: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
    }

    .complete {
        text-decoration: line-through;
    }

    .delete {
        margin-right: 2rem;
        padding: 0 1rem;
    }

</style>