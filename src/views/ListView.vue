<template>
    <div>
        <todo-input></todo-input>
        <todo-list></todo-list>
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
</style>
