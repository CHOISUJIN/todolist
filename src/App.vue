<template>
  <div id="app">
    <todo-header></todo-header>
    <div class="container">
      <folder-list></folder-list>
      <router-view></router-view>
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
</style>
