<template>
    <div class="todo__section">
        <div>
            <todo-input></todo-input>
            <todo-list></todo-list>
        </div> 
    </div>
</template>

<script>
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'

export default {
components : {
    TodoInput,
    TodoList
}
}
</script>

<style scoped>
.todo__section {
    flex-grow: 2; 
    border:1px solid #000; 
}

.todo__section > div {
 margin: 20px 50px;
}
</style>
