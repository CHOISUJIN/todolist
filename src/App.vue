<template>
  <div id="app">
    <todo-header></todo-header>
    <div class="container">
       <folder-list class="todo__nav"></folder-list>
       <router-view class="todo__section"></router-view>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import FolderList from './components/FolderList.vue'

export default {
  name: 'app',
  components: {
      TodoHeader,
      FolderList
  }
}
</script>

<style>
html, body{
  height: 100%; 
  width: 100%; 
  padding: 0; 
  margin: 0;
  font-size: 18px;
}

.container {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

.todo__nav { 
    flex-grow: 0.45;
    border:1px solid #000;   
}

.todo__section {
    flex-grow: 2; 
    border:1px solid #000; 
    padding: 20px;
}
</style>
