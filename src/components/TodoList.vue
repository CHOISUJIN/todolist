<template>
    <div class="todo-list">
        <ul>
            <li v-for="(item, index) in getTodoList" v-bind:key="index"> 
                <input type="checkbox"/>
                {{item}}
                <span class="remove-icon">
                     <i class="fas fa-times"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed : {
        ...mapGetters(["getTodoList"])
    },
    methods: {
        getTodos() {
          const id =this.$route.params.id;
          this.$store.dispatch("fetchTodoList", id);
        }
    },
    created() {
        this.getTodos();
    },
    watch: {
    '$route.params.id' () {
       this.getTodos();
    }
  },
}
</script>

<style scoped>
.todo-list ul {
    padding: 0;
}

.todo-list li {
    list-style: none;
    line-height: 1.8rem;
    border : 1px solid #eaeaea;
    margin-bottom: 1.5%;
    padding: 5px 10px;
    position: relative;
}

.remove-icon {
    position: absolute;
    top: 12%;
    right: 2%;
}
</style>
