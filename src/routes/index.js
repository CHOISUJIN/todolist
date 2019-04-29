import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue';
//import TodoList from '../components/TodoList.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes : [
    {
        path : "/forders/:id",
        component : ListView
    }
  ]
});
